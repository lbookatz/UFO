const express = require("express"); 
const Event = require("../models/event"); 
const Location = require("../models/location");
const router = express.Router(); 
const { Op } = require("sequelize");

router.get("/", async(req, res) => {
    console.log("fromevents file")
    const events = await Event.findAll(); 
    res.status(200).send(events); 
    // res.status(201).send({ message: "I have reached the backend "})
});

router.post("/location", async(req, res) => {
    try {
        const locationSearch = await Location.findOne({
            where: {
                name: {
                    [Op.eq]: req.body.name 
                }
            }
        })
        const eventSearch = await Event.findAll({
            where: {
                locationid: {
                    [Op.eq]: locationSearch.id
                }
            }
        }) 
        res.status(200).send(eventSearch); 
    } catch(err) {
        res.status(500).json(err); 
    }
})

router.post("/dates", async(req, res) => {
    try {
        const dateSearch = await Event.findAll({
            where: {
                date: {
                    [Op.eq]: req.body.date
                }
            }
        });
        res.status(200).json(dateSearch)
    } catch (error) {
        res.status(400).send(`Error: ${error}`); 
    }
})


module.exports = router; 
