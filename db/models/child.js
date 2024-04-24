'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Parent, {
        through: 'ParentChildren',
        foreignKey: 'child_id',
      });
    }
  }
  Child.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('parent', 'child'),
  }, {
    sequelize,
    modelName: 'Child',
  });
  return Child;
};
