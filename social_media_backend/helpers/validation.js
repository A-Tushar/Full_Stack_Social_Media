const User = require('../models/userModel')

exports.validateEmail =(email)=>{

    return String(email).toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
};

exports.validateLength= (text,min,max)=>{
    if(text.length<min || text.length>max){
        return false
    }else{
        return true
    }
};

exports.validateusername = async (username)=>{
    let istrue = false

    do {
        let user = await User.findOne({username})
        if(user){
            username += (+ new Date() * Math.random()).toString().substring(0,1)
            istrue= true
        }else{
            istrue= false  
        }
        
    } while (istrue);
    return(username) 
};
