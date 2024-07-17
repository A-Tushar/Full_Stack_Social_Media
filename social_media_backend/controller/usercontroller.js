const Users = require ("../models/userModel");
const {validateEmail, validateLength} = require("../helpers/validation");
const bcrypt = require('bcrypt');


exports.newUser = async (req,res) => {
 try {
    const {
        first_name,
        last_name,
        user_name,
        email,
        password,
        birth_day,
        birth_month,
        birth_year,
        gender,
        verify
    } = req.body

    if(!validateEmail(email)){
        return res.status(400).json({
            massage:"invalid Email !"
        })
    }
    
    const checkmail = await Users.findOne({email})
    if (checkmail){
        return res.status(400).json({
            massage:"email allready exist "
        })
    }

    if(!validateLength(first_name,3,15)){
        return res.status(400).json({
            massage:"First name should be Minimum 3 & Maximum 15 Charecters"
        })
    }
    if(!validateLength(last_name,3,15)){
        return res.status(400).json({
            massage:"Last name should be Minimum 3 & Maximum 15 Charecters"
        })
    }

    const match = await bcrypt.hash(password,10);
    console.log(match);

    return
    
    const user = await new Users({
        first_name,
        last_name,
        user_name,
        email,
        password,
        birth_day,
        birth_month,
        birth_year,
        gender,
        verify
    }).save()
    res.send(user);

    res.send(req.body)

 } catch (error) {
    res.status(404).json({
        massage:"can't creat new user"
    })
 }
};