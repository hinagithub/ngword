'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('players', [
      {
        room_id: 2,
        name: 'わっちゃん',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_id: 2,
        name: 'さち',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_id: 2,
        name: 'ゆりゆり',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {});
  },
};
