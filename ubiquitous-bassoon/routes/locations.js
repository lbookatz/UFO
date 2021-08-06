const express = require("express"); 
const Location = require("../models/location"); 
const router = express.Router(); 

router.get("/", async(req, res) => {
    const locations = await Location.findAll(); 
    res.status(200).json(locations); 
});

module.exports = router; 
