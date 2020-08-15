var express = require('express');
var router = express.Router();
const rooms = require('../models').rooms;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// ルート
router.get('/all-rooms', (req, res) => {
  rooms.findAll().then((rooms) => {
    res.send(rooms);
  });
});

console.log('.env test:', test);

module.exports = router;
