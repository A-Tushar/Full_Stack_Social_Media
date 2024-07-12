const Users = require ("../models/userModel");

exports.newUser = async (req,res) => {
 try {
    const {
        first_name,
        last_name,
        user_name,
        email,
        password,
        date_of_birth,
        gender,
        verify
    } = req.body
    
    const user = await new Users({
        first_name,
        last_name,
        user_name,
        email,
        password,
        date_of_birth,
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