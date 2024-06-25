const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors'); 
const express = require("express");
const router = require('./routes')
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(router);





app.listen(port,()=>{
    console.log("Port conected ok!");
})