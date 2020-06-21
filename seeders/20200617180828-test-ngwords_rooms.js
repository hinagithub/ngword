'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ngwords_rooms', [
      {
        room_id: 2,
        ngword_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        room_id: 2,
        ngword_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        room_id: 2,
        ngword_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {});
  },
};
