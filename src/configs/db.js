require("dotenv").config();
const mongoose = require("mongoose")

const dataBase = process.env.MONGODB_ATLAST;

const connect = () => {
    return mongoose.connect("mongodb+srv://ashokzarmariya:yugraal8346@cluster0.ithqjss.mongodb.net/?retryWrites=true&w=majority");
}

module.exports = connect; 

