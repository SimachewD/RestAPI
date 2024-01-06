const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./models/conn');

//setup express app
const app = express();
connectDB();

//using body parser as a middleware
app.use(bodyParser.json());
 
app.use('/api', require('./routes/api'));

app.use((err, req, res, next)=>{
    res.send(err.message);
});

//listen to a request
app.listen(process.env.port || 4000, ()=>{
    console.log(`Listening to requests at 4000 or ${process.env.port}`);
}); 