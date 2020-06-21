'use strict';
module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('Players', {
    room_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Players.associate = function(models) {
    // associations can be defined here
  };
  return Players;
};