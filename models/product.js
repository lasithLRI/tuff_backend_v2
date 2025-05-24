module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
        name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        productCode:{
            type:DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        price:{
            type:DataTypes.DECIMAL(null,2),
            allowNull: false,
        },
    });
};

