const Users = require ("../models/userModel");
const {validateEmail, validateLength, validateusername} = require("../helpers/validation");
const bcrypt = require('bcrypt');
const { jwtoken } = require("../helpers/token");


exports.newUser = async (req,res) => {
 try {
    const {
        first_name,
        last_name,
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
    if(!validateLength(password,6,40)){
        return res.status(400).json({
            massage:"Password should be Minimum 6 Charecters"
        })
    }

    // bcrypt password
    const Hashmatch = await bcrypt.hash(password,10);
    
    // validate UserName
    const Tempusename = first_name + last_name ;
    const finalusername = await validateusername(Tempusename);


    
    const user = await new Users({
        first_name,
        last_name,
        username:finalusername,
        email,
        password:Hashmatch,
        birth_day,
        birth_month,
        birth_year,
        gender,
        verify
    }).save()
    res.send(user);
    
    const emailtoken = jwtoken({id: user._id.toString()},"30m")
    console.log(emailtoken);

    res.send(req.body)

 } catch (error) {
    res.status(404).json({
        massage:"can't create new user"
    })
 }
};