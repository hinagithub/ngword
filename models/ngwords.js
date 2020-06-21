'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ngwords = sequelize.define('Ngwords', {
    name: DataTypes.STRING
  }, {});
  Ngwords.associate = function(models) {
    // associations can be defined here
  };
  return Ngwords;
};