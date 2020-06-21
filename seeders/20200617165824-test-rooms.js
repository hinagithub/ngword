'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('rooms', [
      {
        name: 'testRoomName1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'testRoomName2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'testRoomName3',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {});
  },
};
