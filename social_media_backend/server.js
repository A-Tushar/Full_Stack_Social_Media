const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors'); 
const express = require("express");
const router = require('./routes')
const port = process.env.PORT;
const {connect} = require('./database/dbConfig')
// database connection 
connect();


// middleware and usess 

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);



app.listen(port,()=>{
    console.log("Port conected ok!");
})