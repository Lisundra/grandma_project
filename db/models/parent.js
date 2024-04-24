'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Child, {
        through: 'ParentChildren',
        foreignKey: 'parent_id',
      });
      this.hasMany(models.Content, {
        foreignKey: 'parent_id',
      });
    }
  }
  Parent.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('parent', 'child'),
  }, {
    sequelize,
    modelName: 'Parent',
  });
  return Parent;
};