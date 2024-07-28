const jwt = require('jsonwebtoken');

exports.jwtoken = (paylord,expiredIn)=>{

    return jwt.sign(paylord, process.env.SECRET_TOKEN, {
        expiresIn:expiredIn
    })
};