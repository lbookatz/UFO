const { Sequelize, DataTypes, Op } = require("sequelize"); 
require('dotenv').config(); 
const connection = require("./db/connectionsql")

const express = require("express"); 
const app = express(); 
//added to help fetch
const cors = require("cors")
app.use(cors())
const User = require("./models/user");
const Location = require("./models/location");
const Event = require("./models/event");

const userRouter = require("./routes/user");
const locationRouter = require("./routes/locations");
const eventRouter = require("./routes/events");
const logRouter = require("./routes/log");
const jwt = require('jsonwebtoken');

const server = app.listen(process.env.PORT || 5000, async() => {

    await connection.authenticate();
    await connection.sync(); 
    // run();

});

const shutdown = () => {
    console.info(`SIGTERM signal received`);
    console.log(`Closing HTTP server`); 
    server.close(async () => {
        console.log(`HTTP server closed`); 
        await connection.close(); 
    }); 
};

const run = async () => {    
    try {

        // const preston = await Location.create({name: "Preston", region: "North West"}); 
        // await Event.create({date:new Date("2009-01-01"), object: "bright white flashing lights", locationid: preston.id})
        // await User.create({name:"Lance", email:"Lbookatz@hotmai.com", password:"password", token:jwt.sign({name:"Lance"}, process.env.SECRET)})
    } catch (err) {
        console.log(err);
    }
}

process.on('SIGTERM', shutdown); 
process.on('SIGINT', shutdown); 



app.use(express.json()); 

if (process.env.NODE_ENV === "production") {
 app.use(express.static("ufo-front-end/build"))
 app.get("*", (req,res) => {
     res.sendFile(path.resolve(__dirname,"ufo-front-end", "build", "index.html"));
  })
};

app.use("/locations", locationRouter); 
app.use("/events", eventRouter);
app.use("/log", logRouter);
app.use("/user", userRouter);
