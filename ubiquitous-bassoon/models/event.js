const { Sequelize, DataTypes, Op } = require("sequelize"); 
const connection = require("../db/connectionsql")

const Event = connection.define("event", {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    object: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    locationid: {
        type: DataTypes.INTEGER,
        references: {
            model: "locations",
            key: "id"
        }
    }
});

module.exports = Event; 