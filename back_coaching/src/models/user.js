'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    login: {
      type: DataTypes.STRING(155),
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(155),
      allowNull: false,
      unique: true
    },
    password_hash: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    sexe: {
      type: DataTypes.ENUM("Homme", "Femme", "Autre"),
      allowNull: false
    },
    taille: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    age: {
      type: DataTypes.STRING(155),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return User;
};

