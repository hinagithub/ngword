'use strict';
module.exports = (sequelize, DataTypes) => {
  const rooms = sequelize.define(
    'rooms',
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  );
  rooms.associate = function (models) {};
  return rooms;
};
