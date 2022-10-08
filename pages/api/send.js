export default function handler(req, res) {
  let response = null;

  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
    const msg = {
      to: req.body.email,
      bcc: process.env.NEXT_PUBLIC_BCC_MAIL,
      from: process.env.NEXT_PUBLIC_FROM_MAIL,
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
  console.log(NEXT_PUBLIC_SENDGRID_API_KEY);

  res.status(200);
  res.send(response);
}
