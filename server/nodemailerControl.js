require('dotenv').config()
const nodemailer = require('nodemailer')



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'texmexryan@gmail.com',
    pass: 'beefjerky1991'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'texmexryan@gmail.com',
  subject: 'RESERVATION CONFIRMED',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ', info);
  }
});