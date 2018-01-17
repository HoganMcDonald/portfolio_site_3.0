require('dotenv').config();

const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

// middleware
app.use(compression());
app.use(express.static('docs'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Helpers
function sendEmail(email, message) {
  const mailOptions = {
    from: `"Your Website" <${process.env.EMAIL_USERNAME}>`,
    to: 'hogan.developer@gmail.com',
    subject: 'Email from HoganMcDonald.com',
    html: message
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('===email error');
        return reject(error);
      }
      console.log('===email send');
      return resolve(info);
    });
  });
} // sendEmail()

function validateEmail(req, res, next) {
  console.log('===validate email middleware hit');
  let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.test(req.body.email) && req.body.message) {
    console.log('===email is valid');
    next();
  } else {
    res.status(500).send({
      message: 'your email was missing some information'
    });
  }
} // validateEmail

// routes
app.get('/', (req, res)=> {
  res.sendFile(path.resolve('docs/views/index.html'));
});

app.get('/resume', (req, res)=> {
  res.sendFile(path.resolve('docs/assets/resume.pdf'));
});

app.post('/email', validateEmail, (req, res)=> {
  let message = `<ul><li>From: <"${req.body.email}"></li><li>${req.body.message}</li></ul>`;
  console.log('===email composed');
  sendEmail(req.body.email, message)
      .then(success => {
        console.log(success);
        res.status(200).send({message:'success'});
      })
      .catch(error => {
        console.log(error);
        res.status(500).send({message:'something went wrong with gmail', error: error});
      }); // end send mail
}); // POST /email

// start server
const server = app.listen(process.env.PORT, () =>
  console.log(`   Server listening on port ${server.address().port}\n   currently running in ${process.env.NODE_ENV} mode`));

// export
module.exports = app;
