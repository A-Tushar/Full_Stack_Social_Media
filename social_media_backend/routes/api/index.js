const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("this is from backend")
   console.log("backend api inside");
})

module.exports = router 