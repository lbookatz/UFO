const { Sequelize, DataTypes, Op } = require("sequelize"); 
const connection = require("../db/connectionsql")

const User = connection.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token:{
        type: DataTypes.STRING,
        allowNull: false 
    }
});


module.exports = User; 