const nodemailer = require("nodemailer");
const {google} = require('googleapis');

const {OAuth2}=  google.auth;
const oauth_link = 'https://developers.google.com/oauthplayground/';

const {EMAIL,MAILING_ID,MAILING_SECRET,MAILING_REFRESH} = process.env;

const auth = new OAuth2(
    MAILING_ID,
    MAILING_REFRESH,
    MAILING_SECRET,
    oauth_link 
);

exports.sendVerificationEmail = (email,name,url)=>{

    auth.credentials({
        refresh_token: MAILING_REFRESH
    })
    const accesstoken = auth.getAccessToken()

    const stamp = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            type: "OAuth2",
            user: EMAIL,
            clientId: MAILING_ID,
            clientsecret:MAILING_SECRET,
            refreshtoken:MAILING_REFRESH,
            accesstoken,
        }
    })

    const mailOptions = {
        from : EMAIL,
        to: email,
        subject:"Snapify Verification Mail",
        html: ''
    }
    stamp.sendMail(mailOptions,(err,res)=>{
        if(err)return err;
        return res;
    })
    
}
