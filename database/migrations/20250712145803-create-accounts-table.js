'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      provider: {
        type: Sequelize.STRING,
        allowNull: false
      },
      providerAccountId: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'provider_account_id'
      },
      refresh_token: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      access_token: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      expires_at: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      token_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      scope: {
        type: Sequelize.STRING,
        allowNull: true
      },
      id_token: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      session_state: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // ✅
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), // ✅ Best for MySQL
      }
    });

    // Add indexes
    await queryInterface.addIndex('accounts', ['user_id']);
    await queryInterface.addIndex('accounts', ['provider', 'provider_account_id'], { unique: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('accounts');
  }
};
