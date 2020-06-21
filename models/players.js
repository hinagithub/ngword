'use strict';
module.exports = (sequelize, DataTypes) => {
  const players = sequelize.define('players', {
    room_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  players.associate = function(models) {
    // associations can be defined here
  };
  return players;
};