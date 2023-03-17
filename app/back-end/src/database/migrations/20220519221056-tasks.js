'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      task_name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      task_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      task_status: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('tasks');
  }
};
