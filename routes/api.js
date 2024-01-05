const express = require('express');
const router = express.Router();
const NinjaModel = require('../models/ninja');

//get all the data
//GET method
router.get('/', (req, res)=>{
    NinjaModel.create({name:'Abebe', rank:'black belt'});
});

//add new data
//POST method
router.post('/', (req, res)=>{
    res.send(req.method);
});

//update a particular data
//PUT method
router.put('/', (req, res)=>{
    res.send(req.method);
});

//delete a particular data
//DELETE method
router.delete('/', (req, res)=>{
    res.send(req.method);
});

module.exports = router;