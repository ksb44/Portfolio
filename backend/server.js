const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { username, email, message,phoneNumber } = req.body;
console.log(req.body)
  // Setup nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    secure:true,
    port:465,
    auth: {
      user: '12as1913162@gmail.com', 
      pass: 'cggm mbqq qott upur'   
    }
  });

  const mailOptions = {
    from: email,
    to: '12as1913162@gmail.com',
    subject: `New message from ${username}  ${email}`,
    text: `${message}
    this is my contact number ${phoneNumber}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent');
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
