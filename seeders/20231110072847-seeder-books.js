'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('books', [
      {
        title: 'Ilham',
        description: 'First name',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Lutfi',
        description: 'Last name',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('books', null, {});
  }
};
