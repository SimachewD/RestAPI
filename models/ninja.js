const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 //create ninja Schema and model

 const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name Required']
    },
    
    rank: {
        type: String,
    },
    
    available: {
        type: Boolean,
        default: false
    }
 });

 const NinjaModel = mongoose.model('Ninja', NinjaSchema);
 module.exports = NinjaModel;