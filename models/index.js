const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        dialect: 'postgres',
    }
);

// Import models using the function-based pattern
const Size = require('./size')(sequelize, DataTypes);
const Color = require('./colors')(sequelize, DataTypes);
const Product = require('./product')(sequelize, DataTypes);
const Images = require('./images')(sequelize, DataTypes);
const Category = require('./category')(sequelize, DataTypes);
const SubCategory = require('./subcategory')(sequelize, DataTypes);

// Define relationships
Product.belongsTo(Size, { foreignKey: { allowNull: false } });
Product.belongsTo(Color, { foreignKey: { allowNull: false } });
Product.belongsTo(Images, { foreignKey: { allowNull: false } });
Product.belongsTo(Category, { foreignKey: { allowNull: false } });
Product.belongsTo(SubCategory, { foreignKey: { allowNull: false } });

Size.hasMany(Product);
Color.hasMany(Product);
Images.hasMany(Product);
Category.hasMany(Product);
SubCategory.hasMany(Product);

// Export all models and sequelize instance
module.exports = {
    sequelize,
    Product,
    Size,
    Color,
    Images,
    Category,
    SubCategory
};
