require("dotenv").config();
const nodemailer = require("nodemailer");

const sendForgotOTPMail = async (user, otp) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST_MAIL,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER, // GMAIL_USER -> MAIL_USER
      pass: process.env.MAIL_PASS, // GMAIL_PASS -> MAIL_PASS
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: user?.email,
    subject: "Forgot Password - Reset Your Password",
    html: `
    <button
      style="
  text-align:center; width: fit-content;min-width: 100px;    display: block;
  padding: 14px 44px 13px;
  line-height: 120%; margin: 30px auto; background-color: #037d41 ; color:#ffff; border:none;border-radius: 5px;">${otp}</button>
    `,
  };

  let status = true;
  transporter.sendMail(mailOptions, (error, info) => {
    if (info) {
      status = true;
    }
    if (error) {
      status = false;
    }
  });
  return status;
};

const sendWelcomeMail = async (data) => {
  const transporter = nodemailer.createTransport({
    host: "",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER, // GMAIL_USER -> MAIL_USER
      pass: process.env.MAIL_PASS, // GMAIL_PASS -> MAIL_PASS
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: data?.email,
    subject: `Welcome to Sphire – `,
    html: `
    <small style="color: #0f0f0f;">Hello <strong>${data?.first_name} ${data?.last_name}</strong>,</small>
  `,
  };

  let status = true;
  transporter.sendMail(mailOptions, (error, info) => {
    if (info) {
      status = true;
    }
    if (error) {
      status = false;
    }
  });
  return status;
};

const sendQuoteMessage = async (data) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST_MAIL,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER, // GMAIL_USER -> MAIL_USER
      pass: process.env.MAIL_PASS, // GMAIL_PASS -> MAIL_PASS
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.SUPPORT_MAIL,
    subject: `New Get Quote Form Submission`,
    html: `
    <body style="background-color: #f4f4f4; margin: 0; padding: 0;">
    <div
        style="max-width: 600px; width: 100%; margin: 0 auto; font-family: 'Cabin',sans-serif; text-align:center; background-color: #ffff;">
        <div style="width: 100%; background-color: #037d41; align-items: center; padding:30px 0px">
            <small style=" color:#ffff;">Your Verified Seller Status on vicodin </small>
            <p style=" color:#ffff; margin: 0px;     line-height: 39.2px;
    font-size: 28px;">Welcome to vicodin</p>
        </div>


        <div style="padding: 20px; margin-top: 20px; text-align: left; line-break: auto;">
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>Name:</strong> ${data?.subject}
               </p>
            <p style="color: #636465;font-size:14px;line-height:180% ; "><strong>Email:</strong> ${data?.email}</p>
            <p style="color: #636465;font-size:14px;line-height:180% ; ">Hello <strong>${data?.name}</strong>,
            <p style="color: #636465;font-size:14px;line-height:180% ; ">Hello <strong>${data?.phone}</strong>,
            </p>


            <p style="color: #636465;font-size:14px;line-height:180% ; ">Message</p>
            <div style="margin-left: 15px; margin-top: 0;">
                <p style="color: #636465;font-size:14px;line-height:180% ; ">
                    ${data?.message}
                </p>
            </div>

        </div>

        <div
            style="background-color: #d9eee4; padding:10px; font-size:14px;color:#003399;line-height:160%;text-align:center;word-wrap:break-word">
            <p style="font-size:14px;line-height:160%"><span style="font-size:20px;line-height:32px"><strong>Get in
                        touch</strong></span></p>
            <p style="font-size:14px;line-height:160%"><span style="font-size:16px;line-height:25.6px;color:#000000"><a
                        href="mailto:support@vicodin.com"
                        target="_blank">support@vicodin.com</a></span>
            </p>
        </div>
        <div style="color:#ffff; background-color: #037d41; padding: 1px;">
            <p style="font-size:14px;line-height:180% ; color:#ffff">Copyrights © vicodin AB
                All
                Rights Reserved</p>
        </div>
    </div>
</body>
  `,
  };

  let status = true;
  transporter.sendMail(mailOptions, (error, info) => {
    if (info) {
      status = true;
    }
    if (error) {
      status = false;
    }
  });
  return status;
};

const sendNotificationMail = async (emails) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_USER,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER, // GMAIL_USER -> MAIL_USER
      pass: process.env.MAIL_PASS, // GMAIL_PASS -> MAIL_PASS
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: emails,
    subject: `Welcome to Sphire – `,
    html: `
    <small style="color: #0f0f0f;">Hello <strong>Hello</strong>,</small>
  `,
  };

  let status = true;
  transporter.sendMail(mailOptions, (error, info) => {
    console.log(info, error);
    if (info) {
      status = true;
    }
    if (error) {
      status = false;
    }
  });
  return status;
};

module.exports = {
  sendForgotOTPMail,
  sendWelcomeMail,
  sendNotificationMail,
  sendQuoteMessage,
};
