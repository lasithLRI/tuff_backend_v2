module.exports = (sequelize, DataTypes) => {
    return sequelize.define('SubCategory', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
};