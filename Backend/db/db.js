const mongoose = require('mongoose');

function connectDB(){
    mongoose.set('strictQuery', false);
    mongoose.connect("mongodb+srv://dhruv9596:dhruv@cluster0.mhsaxky.mongodb.net/MESSAGEAPP");
    const connection = mongoose.connection;

    connection.once('open', ()=>{
        console.log("DB Connected!");
    });
}

module.exports = connectDB;