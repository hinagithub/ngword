'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ngwords', [
      {
        name: '青いもの(例: 空、海)',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '世界遺産',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '食べ物',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '漫画や小説の題名',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '三十秒間笑わない',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '昔話のキャラクター(例: 桃太郎、かぐや姫)',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '都道府県や市区町村名',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '白いもの(例: 雪、雲)',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '否定をする',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'カフェの名前',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '乗り物',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '誰か一人でも知らないこと',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '黒いもの(ex.ゴキブリ、宇宙)',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '布でできているもの',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'IT機器(例: スマホ、パソコン)',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {});
  },
};
