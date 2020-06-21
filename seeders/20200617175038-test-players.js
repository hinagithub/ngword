'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('players', [
      {
        room_id: 2,
        name: 'わっちゃん',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        room_id: 2,
        name: 'さち',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        room_id: 2,
        name: 'ゆりゆり',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {});
  },
};
