const mongoose = require('mongoose');

// connect to mongodb
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DATABASE CONNECTED: ${conn.connection.host}`);
    } catch (error) { 
        console.log('CONNECTION FAILEDDDDDD.....: ', error); 
    } 
}  
    
module.exports = connectDB;   