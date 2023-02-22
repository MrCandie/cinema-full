const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");
const sendGrd = require("@sendgrid/mail");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = process.env.EMAIL_FROM;
  }
  async transport(template, subject) {
    // send mail
    // render html
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    //define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      // text: htmlToText.fromString(html),
      html,
    };

    // create a transport and send email
    // await this.newTransport().sendMail(mailOptions);
    try {
      sendGrd.setApiKey(process.env.SENDGRID_API);
      const response = await sendGrd.send(mailOptions);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async sendWelcome() {
    await this.transport("welcome", "Welcome to cinema");
  }
  async sendPasswordReset() {
    await this.transport(
      "passwordReset",
      "Your password reset token, (valid for only 10minutes)"
    );
  }
};
