'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Parent, {
        foreignKey: 'parent_id',
      });
    }
  }
  Content.init({
    image_path: DataTypes.STRING,
    text: DataTypes.TEXT,
    parent_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};