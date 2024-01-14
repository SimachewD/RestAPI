const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./models/conn');
const dotenv = require('dotenv');

dotenv.config();//tested my patience

//setup express app
const app = express(); 
connectDB();
 
//using body parser as a middleware
app.use(bodyParser.json());

// Enable CORS for all routes 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
 
//using/importing an API for routing
app.use('/api', require('./routes/api'));
 
//error handling middleware
app.use((err, req, res, next)=>{
    res.send(err.message);      
}); 

//listen to a request
app.listen(process.env.PORT, ()=>{
    console.log(`Listening to requests at ${process.env.PORT}`);
});    