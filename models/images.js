module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Images', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
};