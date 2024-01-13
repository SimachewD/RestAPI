const express = require('express');
const router = express.Router();
const NinjaModel = require('../models/ninja');

//get all the data
//GET method
router.get('/ninjas', (req, res)=>{
    NinjaModel.find().then(ninjas=>{
    res.send(ninjas);
    });
});

//add new data
//POST method
router.post('/ninjas', (req, res, next)=>{
    NinjaModel.create(req.body).then((ninjas)=>{
        res.send(ninjas);
    }).catch(next);
}); 
 
//update specific data
//PUT method
router.put('/ninjas/:id', (req, res, next)=>{
    NinjaModel.findByIdAndUpdate(req.params.id, req.body).then(()=>{
        NinjaModel.findById(req.params.id).then((ninja)=>{
            res.send(ninja);
        });
        }).catch(next);
    }); 

//delete specific data  
//DELETE method
router.delete('/ninjas/:id', (req, res, next)=>{
    NinjaModel.findByIdAndDelete(req.params.id).then((ninja)=>{
        res.send(ninja);}).catch(next);
}); 

module.exports = router;