let mongoose = require("mongoose");
require('dotenv').config()
let uri = process.env.MONGODB_URI;
let connectDB = async ()=>{
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
module.exports =connectDB()