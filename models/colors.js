module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Colors', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
};