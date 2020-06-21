'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ngwords_rooms', [
      {
        room_id: 2,
        ngword_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_id: 2,
        ngword_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_id: 2,
        ngword_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {});
  },
};
