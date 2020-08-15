var express = require('express');
var router = express.Router();
const _ = require('lodash');
const { sequelize } = require('../models');
const Room = require('../models').rooms;
const Player = require('../models').players;
const Ngword = require('../models').ngwords;
const NgwordRoom = require('../models').ngwords_rooms;

/**
 *
 * GET makeRoom
 *
 */ router.get('/', function (req, res, next) {
  res.render('makeRoom', { title: '笑ってはいけない' });
});

/**
 *
 * POST makeRoom
 *
 */
router.post('/', async function (req, res, next) {
  const renderInfo = await getMakeRoomInfo(req.body.player);

  // レンダリング
  if (renderInfo.errMessage === undefined) {
    res.render('makeRoomSuccess', renderInfo);
  } else {
    res.render('failed', renderInfo);
  }
});

async function getMakeRoomInfo(players) {
  // トランザクション開始
  const t = await sequelize.transaction();
  const roomName = Math.random().toString(32).substring(2);
  try {
    // ランダムな部屋名を生成し登録
    const room = await Room.create({ name: roomName }, { transaction: t });
    // プレイヤー名を登録
    const playerRegisterInfo = players.map((player) => {
      console.log(player);
      if (player !== '')
        return {
          room_id: room.id,
          name: player,
        };
    });
    await Player.bulkCreate(playerRegisterInfo, { transaction: t });
    // 全NGワードを取得
    const playerCount = players.length;
    const allNgwords = await Ngword.findAll({ transaction: t });

    // NGワードをシャッフル
    const ngwordsInfo = _.shuffle(allNgwords)
      .splice(0, playerCount)
      .map((word) => {
        return { room_id: room.id, ngword_id: word.id };
      });
    // NGワードを登録
    await NgwordRoom.bulkCreate(ngwordsInfo, { transaction: t });

    // コミット
    await t.commit();
    return { roomName };

    // エラーの場合の処理
  } catch (error) {
    await t.rollback();
    const errMessage = 'なんらかのエラーで部屋を作れませんでした...。';
    return { errMessage: errMessage };
  }
}

module.exports = router;
