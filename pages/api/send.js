export default function handler(req, res) {
  let response = null;

  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_APIKEY);
    const msg = {
      to: req.body.email,
      bcc: "24800mm@gmail.com",
      from: "info_satohonatsu@248cm.com",
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

  res.status(200);
  res.send(response);
}
