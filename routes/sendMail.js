const nodemailer = require('nodemailer');

function sendMail(email,token) {

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
        subject: 'Hello ✔', // Subject line
        // text: 'Hello world?', // plain text body
        html: '<link>http://localhost:3000/checkmail/'+ token +'</link>' // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOption,function(error,info){
        if(error){
            console.log(error);
        }
        else{
            console.log("send mail ok");
        }
    });

}

module.exports = sendMail;

