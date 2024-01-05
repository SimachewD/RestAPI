const express = require('express');
const connectDB = require('./models/conn');

//setup express app
const app = express();
connectDB();
 
app.use('/api', require('./routes/api'));

//listen to a request
app.listen(process.env.port || 4000, ()=>{
    console.log(`Listening to requests at 4000 or ${process.env.port}`);
}); 