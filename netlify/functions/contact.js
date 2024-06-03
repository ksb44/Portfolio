const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    const { username, email, message, phoneNumber } = JSON.parse(event.body);

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      port: 465,
      auth: {
        user: '12as1913162@gmail.com',
        pass: 'cggm mbqq qott upur'
      }
    });

    const mailOptions = {
      from: email,
      to: '12as1913162@gmail.com',
      subject: `New message from ${username} ${email}`,
      text: `${message}\n\nThis is my contact number ${phoneNumber}`
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully' })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() })
    };
  }
};
