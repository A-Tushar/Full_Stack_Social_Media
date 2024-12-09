const nodemailer = require("nodemailer");
const {google} = require('googleapis');
 
const {OAuth2}=  google.auth;
const oauth_link = 'https://developers.google.com/oauthplayground';

const {EMAIL,MAILING_ID,MAILING_SECRET,MAILING_REFRESH} = process.env;

const auth = new OAuth2(
    MAILING_ID,
    MAILING_SECRET,
    MAILING_REFRESH,
    oauth_link 
);

exports.sendVerificationEmail = (email,name,url)=>{

    auth.credentials({
        refresh_token: MAILING_REFRESH
    })
    const accessToken = auth.getAccessToken()

    const stmp = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            type: "OAuth2",
            user: EMAIL,
            clientId: MAILING_ID,
            clientSecret:MAILING_SECRET,
            refreshToken:MAILING_REFRESH,
            accessToken,
        }
    })

    const mailOptions = {
        from : EMAIL,
        to: email,
        subject:"Snapify Verification Mail",
        html: ` <div style="padding: 20px; border-radius: 5px; text-align: center; border: 1px solid black; margin: 10px; "> <h1 style=" font-family: Arial, Helvetica, sans-serif; color: black;"> Hello ${name} What's Up</h1> <p style=" font-family: Arial, Helvetica, sans-serif;">Hope you are doing well, Please verify you mail for Snapify App Authentications. If you are not using this App Please ignore this mail </p> <a href=${url} style=" padding: 8px 15px; margin-top: 15px; display: inline-block; border-radius: 5px; border: 1px solid black; text-decoration: none; background-color: lightblue; font-size:large;" > Verify Mail</a> </div>`
    }
    stmp.sendMail(mailOptions,(err,res)=>{
        if(err)return err;
        return res;
    })
    
}
