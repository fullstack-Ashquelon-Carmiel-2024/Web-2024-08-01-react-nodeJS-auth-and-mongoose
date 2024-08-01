const mongoose = require('mongoose');

// MISSION: Convert connectDB into IIFE and run
const connectDB = async () => {
    try {

        console.log(`process.env.MONGODB_URI :  
        ${process.env.MONGODB_URI}`);
        await mongoose.connect(process.env.MONGODB_URI, {});
        console.log('Connected to MongoDB, Mazal Tov!');


    } catch (err) {

        console.log('Error connecting to MongoDB:');
        throw err;

    }
};

connectDB();

module.exports = connectDB;