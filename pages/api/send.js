import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  let response = null;

  if (req.method === "POST") {
    const msg = {
      to: req.body.email,
      bcc: process.env.BCC_MAIL,
      from: process.env.FROM_MAIL,
      subject: "お問合せありがとうございました。",
      text: `${req.body.name} 様\nお問合せを受け付けました。回答をお待ちください。\n\n ${req.body.message}`,
    };

    try {
      response = await sgMail.send(msg);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  }
  res.status(200);
  res.send(response);
}
