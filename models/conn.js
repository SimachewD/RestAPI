const mongoose = require('mongoose');

// connect to mongodb
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://simachew:316500@cluster0.lp82vcx.mongodb.net/restDB?retryWrites=true&w=majority');
        console.log(`DATABASE CONNECTED: ${conn.connection.host}`);
    } catch (error) { 
        console.log('CONNECTION FAILEDDDDDD.....: ', error); 
    } 
}  
 
module.exports = connectDB;  