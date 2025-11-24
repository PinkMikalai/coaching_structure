'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('poid', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    });
    // Réorganiser les colonnes : user_id après id et avant poid
    await queryInterface.sequelize.query(`
      ALTER TABLE poid 
      MODIFY COLUMN user_id INTEGER AFTER id
    `);
    await queryInterface.sequelize.query(`
      ALTER TABLE poid 
      MODIFY COLUMN poid INTEGER NOT NULL AFTER user_id
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('poid', 'user_id')
  }
};