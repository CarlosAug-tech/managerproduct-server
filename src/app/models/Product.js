import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        price: Sequelize.INTEGER,
        provider_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, {
      foreignKey: 'image_id',
      as: 'imageproduct',
    });
    this.belongsTo(models.User, {
      foreignKey: 'provider_id',
      as: 'provider',
    });
  }
}

export default Product;
