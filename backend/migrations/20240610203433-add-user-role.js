'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('user', 'role', {
      type: Sequelize.DataTypes.ENUM,
      values: [
        'reviewer',
        'admin',
      ],
      defaultValue: 'reviewer'
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('user', 'role')
  }
};