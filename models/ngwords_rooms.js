'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ngwords_rooms = sequelize.define('Ngwords_rooms', {
    room_id: DataTypes.INTEGER,
    ngword_id: DataTypes.INTEGER
  }, {});
  Ngwords_rooms.associate = function(models) {
    // associations can be defined here
  };
  return Ngwords_rooms;
};