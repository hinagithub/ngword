'use strict';
module.exports = (sequelize, DataTypes) => {
  const ngwords_rooms = sequelize.define('ngwords_rooms', {
    room_id: DataTypes.INTEGER,
    ngword_id: DataTypes.INTEGER
  }, {});
  ngwords_rooms.associate = function(models) {
    // associations can be defined here
  };
  return ngwords_rooms;
};