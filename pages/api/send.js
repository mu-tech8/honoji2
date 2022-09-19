export default function handler(req, res) {
  let response = null;

  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: req.body.email,
      bcc: process.env.BCC_MAIL,
      from: process.env.FROM_MAIL,
      subject: "お問合せありがとうございました。",
      text: `${req.body.name} 様\nお問合せを受け付けました。回答をお待ちください。\n\n ${req.body.message}`,
    };

    (async () => {
      try {
        response = await sgMail.send(msg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }
  console.log(process.env.FROM_MAIL);
  console.log(process.env.BCC_MAIL);
  console.log(process.env.SENDGRID_API_KEY);
  console.log(process.env.API_KEY);
  res.status(200);
  res.send(response);
}
