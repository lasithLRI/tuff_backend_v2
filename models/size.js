


module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Size', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
};