var express = require('express');
var router = express.Router();
const _ = require('lodash');
const { sequelize } = require('../models');
const Room = require('../models').rooms;
const Player = require('../models').players;
const Ngword = require('../models').ngwords;
const NgwordRoom = require('../models').ngwords_rooms;

/* GET makeRoom. */
router.get('/', function (req, res, next) {
  res.render('makeRoom', { title: 'Express' });
});

/* POST makeRoom*/
router.post('/', async function (req, res, next) {
  // トランザクション開始
  const t = await sequelize.transaction();
  const roomName = Math.random().toString(32).substring(2);
  try {
    // ランダムな部屋名を生成しDBに登録
    const room = await Room.create({ name: roomName }, { transaction: t });
    // プレイヤー名を取得し登録
    const playerRegisterInfo = req.body.player.map((player) => {
      return {
        room_id: room.id,
        name: player,
      };
    });
    await Player.bulkCreate(playerRegisterInfo, { transaction: t });
    // 全NGワードを取得
    const playerCount = req.body.player.length;
    const allNgwords = await Ngword.findAll({ transaction: t });

    // シャッフルしてプレイヤー人数の分だけNGワードを生成&登録
    const ngwordsInfo = _.shuffle(allNgwords)
      .splice(0, playerCount)
      .map((word) => {
        return { room_id: room.id, ngword_id: word.id };
      });
    await NgwordRoom.bulkCreate(ngwordsInfo, { transaction: t });

    // コミット
    await t.commit();

    // エラーの場合の処理
  } catch (error) {
    await t.rollback();
    const errMessage = 'なんらかのエラーで部屋を作れませんでした...。';
    res.render('makeRoomFailed', { errMessage: errMessage });
  }
  // 成功画面へ遷移
  res.render('makeRoomSuccess', { roomName: roomName });
});

module.exports = router;
