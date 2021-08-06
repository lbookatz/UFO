const { Sequelize, DataTypes } = require("sequelize"); 
const connection = require("../db/connectionsql")

const Location = connection.define("location", {
    name: {
        type: DataTypes.STRING, 
        allowNul: false
    },
    region: {
        type: DataTypes.STRING, 
        allowNull: false
    }
}, {}); 

module.exports = Location; 