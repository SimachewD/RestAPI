const mongoose = require('mongoose');

// connect to mongodb
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://newuser:316500@cluster0.g7wqxq7.mongodb.net/restApi/?retryWrites=true&w=majority');
        console.log(`DATABASE CONNECTED: ${conn.connection.host}`);
    } catch (error) {
        console.log('CONNECTION FAILED: ', error); 
    } 
}  

module.exports = connectDB;  