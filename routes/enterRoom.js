const { Op } = require('sequelize');
const express = require('express');
const router = express.Router();
const { sequelize } = require('../models');
const _ = require('lodash');
const Room = require('../models').rooms;
const Player = require('../models').players;
const NgwordRoom = require('../models').ngwords_rooms;
const Ngword = require('../models').ngwords;

/**
 *
 * GET enterRoom
 *
 */
router.get('/', async function (req, res, next) {
  const roomName = req.query.roomName;
  console.log(roomName);
  // トランザクション開始
  const t = await sequelize.transaction();

  // roomNameがなければエラーを返す
  if (!roomName) {
    res.render('enterRoom', {
      errorMessage: '部屋が存在しません...URLをご確認ください',
    });
  }
  try {
    // roomIdを取得   http://localhost:3000/enterRoom?roomName=6im25qpkvj8
    const room = await Room.findOne({
      where: {
        name: roomName,
      },
    });
    console.log('OK roomName:', room.id);
    // プレイヤーを取得
    const playerNames = await Player.findAll({
      where: {
        room_id: room.id,
      },
    }).map((player) => player.name);
    console.log('OK player.name:', playerNames);

    // コミット
    await t.commit();

    // レンダリング
    const renderInfo = {
      roomId: room.id,
      roomName,
      playerNames,
      errMessage: undefined,
    };
    res.render('enterRoom', renderInfo);

    // エラーの場合の処理
  } catch (error) {
    await t.rollback();
    const errMessage = 'なんらかのエラーで部屋に入れませんでした...。';
    res.render('failed', { errMessage: errMessage });
  }
});

/**
 *
 * POST enterRoom
 *
 */
router.post('/', async function (req, res, next) {
  const roomId = req.body.roomId;
  const selectedPlayerName = req.body.selectedPlayerName;
  // トランザクション開始
  const t = await sequelize.transaction();
  try {
    // roomNameを取得
    const room = await Room.findOne({
      where: {
        id: roomId,
      },
    });
    const roomName = room.name;
    console.log('OK! roomName:', roomName);

    // プレイヤーを取得
    const playerNames = await Player.findAll({
      where: {
        room_id: roomId,
      },
    }).map((player) => player.name);
    console.log('OK! playerNames:', playerNames);

    // NGワードIDを取得
    const ngwordsRooms = await NgwordRoom.findAll({
      where: {
        room_id: roomId,
      },
    });
    const ngwordIds = ngwordsRooms.map((word) => word.ngword_id);
    console.log('OK! ngwordIds:', ngwordIds);

    // NGワードNameを取得
    const ngwords = await Ngword.findAll({
      where: {
        id: {
          [Op.or]: ngwordIds,
        },
      },
    }).map((word) => word.name);
    console.log('OK! ngword:', ngwords);

    // コミット
    await t.commit();

    // レンダリング
    const renderInfo = {
      roomId: roomId,
      roomName,
      selectedPlayerName,
      playerNames,
      ngwords,
      errMessage: undefined,
    };
    res.render('room', renderInfo);

    // エラーの場合の処理
  } catch (error) {
    await t.rollback();
    const errMessage = 'なんらかのエラーで部屋に入れませんでした...。';
    res.render('failed', { errMessage: errMessage });
  }
});

/**
 *
 * GET shuffleNgwords
 *
 */
router.get('/shuffleNgwords', async function (req, res, next) {
  const roomId = req.query.roomId;
  // トランザクション開始
  const t = await sequelize.transaction();

  try {
    // roomNameを取得
    const room = await Room.findOne({
      where: {
        id: roomId,
      },
    });
    const roomName = room.name;
    console.log('OK! roomName:', roomName);

    // プレイヤーを取得
    const playerNames = await Player.findAll({
      where: {
        room_id: roomId,
      },
    }).map((player) => player.name);
    console.log('OK! playerNames:', playerNames);

    // 全NGワードを取得
    const playerCount = playerNames.length;
    const allNgwords = await Ngword.findAll();

    // 今のNGワードを削除
    await NgwordRoom.destroy({
      where: {
        room_id: roomId,
      },
    });

    // 新しいNGワードを作成
    const ngwordsInfo = _.shuffle(allNgwords)
      .splice(0, playerCount)
      .map((word) => {
        return {
          room_id: room.id,
          ngword_id: word.id,
        };
      });
    // 新しいNGワードを登録
    await NgwordRoom.bulkCreate(ngwordsInfo);
    console.log(ngwordsInfo);

    // NGワードIDを取得
    const ngwordsRooms = await NgwordRoom.findAll({
      where: {
        room_id: roomId,
      },
    });
    const ngwordIds = ngwordsRooms.map((word) => word.ngword_id);
    console.log('OK! ngwordIds:', ngwordIds);

    // NGワードNameを取得
    const ngwords = await Ngword.findAll({
      where: {
        id: {
          [Op.or]: ngwordIds,
        },
      },
    }).map((word) => word.name);
    console.log('OK! ngword:', ngwords);

    // コミット
    await t.commit();

    // レンダリング
    const renderInfo = {
      roomId: room.id,
      roomName,
      playerNames,
      errMessage: undefined,
    };
    res.render('enterRoom', renderInfo);

    // エラーの場合の処理
  } catch (error) {
    await t.rollback();
    const errMessage = 'なんらかのエラーでシャッフルできませんでした...。';
    res.render('failed', { errMessage: errMessage });
  }
});

module.exports = router;
