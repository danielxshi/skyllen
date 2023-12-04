const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "danielxshi@hotmail.com",
  from: {
    name: "Skyllen Pacific",
    email: "Receiver Email",
  },
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

const sendMail = async () => {
  try {
    await sgMail.send(msg);
    console.log("email has been sent");
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

sendMail();
