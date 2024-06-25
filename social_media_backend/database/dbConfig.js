const mongoose = require("mongoose")
const mongodburl = process.env.MONGODB_URL;

exports.connect =()=>{
    mongoose.connect(mongodburl).then(()=>{
        console.log("Database connected Succesfully!");
    })
}

