const express = require("express"); 
const router = express.Router(); 
const Event = require("../models/event"); 

router.post("/", async (req,res) => {
    try {
        const event = await Event.create({
            date: req.body.date,
            object: req.body.object,
            locationid: req.body.locationid
        }, {})
        res.status(201).send("New event logged. Thanks for your spooky findings.");
    } catch (err) {
        res.status(400).send(`Error: ${err}`);
    }
});

module.exports = router; 