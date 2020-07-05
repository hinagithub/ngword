var express = require('express');
var router = express.Router();
const _ = require('lodash');
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
  // ランダムな部屋名を生成しDBに登録
  const roomName = Math.random().toString(32).substring(2);
  const room = await Room.create({ name: roomName });

  // プレイヤー名を取得し登録
  const playerRegisterInfo = req.body.player.map((player) => {
    return {
      room_id: room.id,
      name: player,
    };
  });
  await Player.bulkCreate(playerRegisterInfo);

  // 全NGワードを取得
  const playerCount = req.body.player.length;
  const allNgwords = await Ngword.findAll();
  // シャッフルしてプレイヤー人数の分だけ取得
  const ngwordsInfo = _.shuffle(allNgwords)
    .splice(0, playerCount)
    .map((word) => {
      return { room_id: room.id, ngword_id: word.id };
    });
  // NGワードを登録
  await NgwordRoom.bulkCreate(ngwordsInfo);

  // 成功画面へ遷移
  res.render('makeRoomSuccess', { roomName: roomName });
});

module.exports = router;
