const nodemailer = require('nodemailer');

function sendMail(email, Password, userName) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "avaichuong@gmail.com",
            pass: "tran@bclovecd"
        }
    });

    var mailOption = {
        from: "avaichuong@gmail.com", // sender address
        to: email, // list of receivers
        subject: "Reset Password", // Subject line
        text: "your new password: " + Password + "---" + "your UserName: " + userName, // plain text body
        // html: '<link>http://localhost:3000/checkmail/' + token + '</link>' // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("send mail ok");
        }
    });

}

module.exports = sendMail;

