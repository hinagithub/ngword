'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ngwords', [
      {
        name: '青いもの(例: 空、海)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '世界遺産',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '食べ物',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '漫画や小説の題名',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '三十秒間笑わない',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '昔話のキャラクター(例: 桃太郎、かぐや姫)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '都道府県や市区町村名',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '白いもの(例: 雪、雲)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '否定をする',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'カフェの名前',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '乗り物',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '誰か一人でも知らないこと',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '黒いもの(ex.ゴキブリ、宇宙)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '布でできているもの',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'IT機器(例: スマホ、パソコン)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {});
  },
};
