'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('verification_tokens', {
      identifier: {
        type: Sequelize.STRING,
        allowNull: false
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      expires: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at'
      }
    });

    // Add composite primary key
    await queryInterface.addConstraint('verification_tokens', {
      fields: ['identifier', 'token'],
      type: 'primary key',
      name: 'verification_tokens_pkey'
    });

    // Add indexes
    await queryInterface.addIndex('verification_tokens', ['token'], { unique: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('verification_tokens');
  }
};
