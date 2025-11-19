'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      login: {
        type: Sequelize.STRING(155),
        unique:true,
        allowNull : false
      },
      email: {
        type: Sequelize.STRING(155),
        allowNull: false,
        unique: true
      },
      password_hash: {
        type: Sequelize.STRING(300),
        allowNull:false
      },
      sexe: {
        type: Sequelize.ENUM("Homme","Femme","Autre")
      },
      taille: {
        type: Sequelize.INTEGER(155),
        unique:true,
        allowNull : false
      },
      age: {
        type: Sequelize.STRING(155),
        allowNull : false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }

     });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('users');
    
  }
};
