'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ngwords_rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      room_id: {
        type: Sequelize.INTEGER,
        references: { model: 'rooms', key: 'id' }, // 外部キー
      },
      ngword_id: {
        type: Sequelize.INTEGER,
        references: { model: 'ngwords', key: 'id' }, // 外部キー
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ngwords_rooms');
  },
};
