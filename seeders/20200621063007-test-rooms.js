'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('rooms', [
      {
        name: 'testRoomName1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'testRoomName2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'testRoomName3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {});
  },
};
