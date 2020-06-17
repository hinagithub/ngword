'use strict';
module.exports = (sequelize, DataTypes) => {
  const ngwords = sequelize.define('ngwords', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  ngwords.associate = function(models) {
    // associations can be defined here
  };
  return ngwords;
};