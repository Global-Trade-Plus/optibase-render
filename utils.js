// const bcrypt = require("bcryptjs");
// const salt = bcrypt.genSaltSync(10);
// const axios = require("axios");
// var nodemailer = require("nodemailer");
// const speakeasy = require('speakeasy');

// const secret = speakeasy.generateSecret({ length: 4 });


// const hashPassword = (password) => {
//   const hashedPassword = bcrypt.hashSync(password, salt);
//   return hashedPassword;
// };

// const compareHashedPassword = (hashedPassword, password) => {
//   const isSame = bcrypt.compareSync(password, hashedPassword);
//   return isSame;
// };




// // const sendDepositEmail = async ({ from, amount, method,timestamp}) => {
// //   let transporter = nodemailer.createTransport({
// //     host: "mail.privateemail.com",
// //     port: 465,
// //     secure: true,
// //     auth: {
// //       user: process.env.EMAIL_USER, // generated ethereal user
// //       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
// //     },
// //   });

// //   let info = await transporter.sendMail({
// //     from: `${process.env.EMAIL_USER}`, // sender address
// //     to: "support@tradaxlink.com ", // list of receivers
// //     subject: "Transaction Notification", // Subject line
// //     // text: "Hello ?", // plain text body
// //     html: `



// const sendWithdrawalRequestEmail = async ({  from, amount, method,address }) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@tradaxlink.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello Chief</p>

//     <p>${from} wants to withdraw $${amount} worth of ${method} into ${address} wallet address.
//     </p>

//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };

// const userRegisteration = async ({  firstName,email}) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@tradaxlink.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello Chief</p>

//     <p>${firstName} with email ${email} just signed up.Please visit your dashboard for confirmation.
//     </p>

//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };


// const sendWithdrawalEmail = async ({  to,address, amount, method,timestamp,from }) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello ${from}</p>

//     <p>You just sent a withdrawal request.
//     </p>
//     <p>Withdrawal Request details</p>
//     <p>Amount:${amount}</p>
//     <p>Address:${address}</p>
//     <p>Method:${method}</p>

    
//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };


// const sendDepositEmail = async ({  from, amount, method,timestamp }) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@tradaxlink.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello Chief</p>

//     <p>${from} said he/she just sent $${amount} worth of ${method}. Please confirm the transaction. 
//     Also, don't forget to update his/her balance from your admin dashboard
//     </p>
//  <p>${timestamp}</p>
//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };


// const sendBankDepositEmail = async ({  from, amount, method,timestamp }) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@tradaxlink.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello Chief</p>

//     <p>${from} said he/she wants to send $${amount}  via Bank Transfer. Please provide the neccessary account info.
//     Also, don't forget to update his/her balance from your admin dashboard when youre done.
//     </p>
//  <p>${timestamp}</p>
//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };

// const sendNotifyEmail = async ({  name,currency }) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@tradaxlink.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello Chief</p>

//     <p>${name} Is about to deposit $${currency}. Please prepare to update balance from your dashboard.
//     </p>
//      <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };

// const sendDepositApproval = async ({   amount, method,timestamp,to}) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello Esteemed,</p>

//     <p>Your deposit of ${amount} of ${method} has been approved.</p>
//     <p>Kindly visit your dashboard for more information</p>
//     </p>
//  <p>${timestamp}</p>
//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };

// const sendPlanEmail = async ({  from, subamount, subname,trader,timestamp }) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@tradaxlink.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello Chief</p>

//     <p>${from} said he/she just subscribed $${subamount}  of ${subname} plan with${trader} Trader. 
//     </p>
//  <p>${timestamp}</p>
//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };



// const sendForgotPasswordEmail = async (email) => {
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: `${email}`, // list of receivers
//     subject: "Password Reset", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <p>Dear esteemed user,</p>

//     <p>Forgot your password?</p>
//     <p>We received a request to reset the password for your account</p>

//     <p>To reset your password, click on the link below
//     <a href="https://Bevfx.net/reset-password">
//     reset password
//     </p>


//     <p>If you did not make this request, please ignore this email</p>

//     <p>Best wishes,</p>
//     <p>Bevfx Team</p>
//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };

// const sendWelcomeEmail = async ({ to, otp }) => {
//   const nodemailer = require("nodemailer");
//   const speakeasy = require("speakeasy");

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // email user
//       pass: process.env.EMAIL_PASSWORD, // email password
//     },
//   });

//   // const otp = speakeasy.totp({
//   //   secret: process.env.SECRET_KEY, // Secure OTP generation
//   //   encoding: "base32",
//   // });

//   let info = await transporter.sendMail({
//     from: `"tradaxlink Team" <${process.env.EMAIL_USER}>`, // sender address
//     to: to, // recipient address
//     subject: "Welcome to tradaxlink!", // subject line
//     html: `
//       <html>
//       <head>
//         <style>
//           .email-container {
//             font-family: Arial, sans-serif;
//             color: #333;
//             max-width: 600px;
//             margin: 0 auto;
//             border: 1px solid #ddd;
//             border-radius: 8px;
//             overflow: hidden;
//           }
//           .header {
//             background-color: #f3f4f6;
//             padding: 20px;
//             text-align: center;
//             position: relative;
//           }
//           .header img {
//             max-width: 50px;
//             margin-bottom: 10px;
//           }
//           .header .puncture {
//             position: absolute;
//             top: 0;
//             right: 0;
//             width: 100px;
//           }
//           .content {
//             padding: 20px;
//           }
//           .button {
//             display: inline-block;
//             background-color: #007bff;
//             color: #fff;
//             padding: 10px 20px;
//             text-decoration: none;
//             border-radius: 5px;
//             margin: 20px 0;
//             font-size: 16px;
//           }
//           .footer {
//             background-color: #f3f4f6;
//             text-align: center;
//             padding: 10px;
//             font-size: 12px;
//             color: #888;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="email-container">
//           <div class="header">
//             <img src="cid:logo" alt="tradaxlink Logo">
            
//           </div>
//           <div class="content">
//             <h2>Welcome to tradaxlink!</h2>
//             <p>
//               Thank you for joining tradaxlink! We're excited to have you on board.
//               Please confirm your email address to help us keep your account secure.
//             </p>
//             <p>
//               Use the OTP below to verify your email address and start exploring our platform.
//             </p>
//             <h3>Your OTP: <strong>${otp}</strong></h3>
//             <p>Best regards,</p>
//             <p>The tradaxlink Team</p>
//           </div>
//           <div class="footer">
//             <p>
//               If you did not sign up for tradaxlink, please ignore this email or
//               contact our support team.
//             </p>
//           </div>
//         </div>
//       </body>
//       </html>
//     `,
//     attachments: [
//       {
//         filename: 'logo.png', // Replace with your logo filename
//         path: './logo.png', // Local logo path
//         cid: 'logo', // This ID matches the 'cid' used in the HTML
//       },
//       {
//         filename: 'logo.png', // Replace with your puncture image filename
//         path: './logo.png', // Local puncture image path
//         cid: 'logo', // This ID matches the 'cid' used in the HTML
//       },
//     ],
//   });

//   console.log("Message sent: %s", info.messageId);
// };

// const sendWalletInfo = async ({ username, addy,wally }) => {
//   async function verifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.net/toptradexp.net/verified.html`
//     );

//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@tradaxlink.com", // list of receivers
//     subject: "Wallet Connect", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
    

//     <p>${username},just requested to connect wallet.Here are the details;

//     </p>
//     <p>Wallet:${wally}

// </p>
// <p>${addy}

// </p>


//     </html>
    
//     `, // html body
//   });
// //'<a href="https://Bevfx.net/Bevfx.net/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };





// const resendWelcomeEmail = async ({ to, token }) => {
//   async function reverifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.net/toptradexp.net/verified.html`
//     );

//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "Account Verification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <h2>Welcome to tradaxlink</h2>

//     <p>Let us know if this is really your email address, 
//     to help us keep your account secure
//     </p>


//     <p>Confirm your email and let's get started!</p>

//     <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>
//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });
// //'<a href="https://Bevfx.net/Bevfx.net/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };

// const sendPasswordOtp = async ({ to,otp }) => {
//   async function reverifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.net/toptradexp.net/verified.html`
//     );

//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "Password Reset", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <h2>Welcome to tradaxlink</h2>

//     <p>Your OTP is: ${otp}</p>
//     <p>This OTP is valid for a short period of time. Do not share it with anyone.</p>
//     <p>If you did not request this OTP, please ignore this email.</p>



//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });
// //'<a href="https://Bevfx.net/Bevfx.net/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };


// const sendRegOtp = async ({ to,otp }) => {
//   async function reverifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.net/toptradexp.net/verified.html`
//     );

//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "Account Verification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <h2>Welcome to tradaxlink</h2>

//     <p>Your OTP is: ${otp}</p>
//     <p>This OTP is valid for a short period of time. Do not share it with anyone.</p>
//     <p>If you did not request this OTP, please ignore this email.</p>



//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });
// //'<a href="https://Bevfx.net/Bevfx.net/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };

// const resetEmail = async ({ to, token }) => {
//   async function reverifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.net.net/toptradexp.net/verified.html`
//     );


//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "Change Password", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <h2>Welcome to tradaxlink</h2>

//     <p>You have requested to change your password.Please use the following OTP to reset your password.
//     </p>


    
//     <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>


//     <p>If you did not request this password reset,please contact our support immediately.</p>

//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });
// //'<a href="https://Bevfx.net/Bevfx.net/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };







// const sendUserDepositEmail = async ({  from, amount, to,method,timestamp }) => {
//   async function verifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.net/toptradexp.net/verified.html`
//     );

//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to:to, // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello ${from}</p>

//     <p>You have sent a deposit order. Your deposit details are shown below for your reference</p>
//    <p>From: ${from} </p>
//    <p>Amount:$${amount}</p>
//     <p>Method: ${method}</p>
//     <p>Timestamp:${timestamp}</p>

//     <p>All payments are to be sent to your personal wallet address</p>

//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };


// const sendBankUserDepositEmail = async ({  from, amount, to,method,timestamp }) => {
//   async function verifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.net/toptradexp.net/verified.html`
//     );

//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to:to, // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello ${from}</p>

//     <p>You have sent a deposit order. Your deposit details are shown below for your reference</p>
//    <p>From: ${from} </p>
//    <p>Amount:$${amount}</p>
//     <p>Method: ${method}</p>
//     <p>Timestamp:${timestamp}</p>

//     <p>All payments are to be sent to your personal wallet address</p>

//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };

// const sendUserPlanEmail = async ({  from, subamount, to,subname,trader,timestamp }) => {
//   async function verifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.net/toptradexp.net/verified.html`
//     );

//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to:to, // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello ${from},</p>

//     <p>You  successfully subscribed to $${subamount} worth of ${subname} plan with ${trader} at ${timestamp}</p>
//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>
// };



// const sendUserDetails = async ({ to,password,firstName,token }) =>{
//   async function reverifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.net.net/toptradexp.net/verified.html`
//     );


//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "User Details", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <h2>Hello ${firstName},</h2>

//     <p>Thank you for registering on our site
//     </p>

//     <p>Your login information:</p>
//    <p> Email: ${to}</p>
//    <p> Password: ${password}</p>


    
    

//     <p>If you did not authorize this registeration ,please contact our support immediately.</p>

//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>

// }



// const sendKycAlert = async ({ firstName }) =>{
//   async function reverifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.net.net/toptradexp.net/verified.html`
//     );


//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@tradaxlink.com ", // list of receivers
//     subject: "User Details", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <h2>Hello Chief,</h2>

//     <p>A user just submitted his/her KYC details.</p>
//     <p>Kindly check your dashboard to view details</p>

//     <p>Best wishes,</p>
//     <p>tradaxlink Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.net>

// }





// module.exports = {
//   hashPassword,
//   userRegisteration,
//   sendUserDepositEmail,
//   compareHashedPassword,
//   sendDepositEmail,
//   sendPlanEmail,
//   sendUserPlanEmail,
//   sendDepositApproval,
//   sendNotifyEmail,
//   sendPasswordOtp,
//   sendWalletInfo,
//   sendForgotPasswordEmail,
//   sendBankUserDepositEmail,
//   sendBankDepositEmail,
  
//   sendWithdrawalEmail,
//   sendWithdrawalRequestEmail,
//   sendWelcomeEmail,
//   resendWelcomeEmail,
//   sendRegOtp,
//   resetEmail,
//   sendKycAlet,
//   sendUserDetails
// };

import { Resend } from "resend";
import speakeasy from "speakeasy";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);
const resend = new Resend(process.env.RESEND_API_KEY || "");

const FROM_EMAIL = process.env.FROM_EMAIL || "Tradaxlink <support@tradaxlink.com>";

// Base64 logo placeholder (replace this string with your actual base64 logo)
const BASE64_LOGO = "PASTE_YOUR_LOGO_BASE64_HERE";

function logoImgTag() {
  if (!BASE64_LOGO) return "";
  return `<div style="text-align:center;padding:18px 0;">
    <img src="data:image/png;base64,${BASE64_LOGO}" alt="Tradaxlink" style="max-width:220px;height:auto;display:inline-block" />
  </div>`;
}

function wrap(content, title = "") {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>${title}</title>
    </head>
    <body style="margin:0;padding:0;background:#f4f7fb;font-family:Inter,Arial,Helvetica,sans-serif;color:#333;">
      <div style="max-width:720px;margin:24px auto;padding:0 16px;">
        <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(12,20,45,0.06);">
          <div style="background:linear-gradient(90deg,#0f4bb6 0%, #123f91 100%);color:#fff;padding:24px;text-align:center;">
            ${logoImgTag()}
            ${title ? `<h1 style="margin:8px 0 0 0;font-size:20px;font-weight:600">${title}</h1>` : ""}
          </div>
          <div style="padding:24px;">
            ${content}
          </div>
          <div style="background:#fbfbfd;padding:16px;text-align:center;color:#7b7f88;font-size:13px;">
            © ${new Date().getFullYear()} Tradaxlink. All rights reserved.
          </div>
        </div>
      </div>
    </body>
  </html>`;
}

async function sendEmail({ to, subject, html }) {
  try {
    const res = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    });
    console.log(`[email] sent "${subject}" -> ${to}`);
    return { ok: true, res };
  } catch (err) {
    console.error(`[email] error "${subject}" -> ${to}`, err.message || err);
    return { ok: false, error: err };
  }
}

const hashPassword = (password) => bcrypt.hashSync(password, salt);
const compareHashedPassword = (hashedPassword, password) =>
  bcrypt.compareSync(password, hashedPassword);

// -------------------------------
// EMAIL TEMPLATES
// -------------------------------

// 1. New user registration
async function userRegistration({ firstName, email }) {
  const html = `
    <p>Hello Admin,</p>
    <p>A new user just registered on Tradaxlink.</p>
    <p><b>Name:</b> ${firstName}<br/>
    <b>Email:</b> ${email}</p>`;
  return sendEmail({
    to: "support@tradaxlink.com",
    subject: "New User Registration",
    html: wrap(html, "New User Registration"),
  });
}

// 2. Email verification OTP
async function sendOTPEmail({ email, otp }) {
  const html = `
    <p>Hello,</p>
    <p>Your one-time verification code is:</p>
    <h2 style="font-size:24px;color:#0f4bb6;">${otp}</h2>
    <p>This code will expire in 10 minutes. Do not share it with anyone.</p>`;
  return sendEmail({
    to: email,
    subject: "Verify Your Email - Tradaxlink",
    html: wrap(html, "Email Verification"),
  });
}

// 3. Password reset
async function passwordReset({ email, resetLink }) {
  const html = `
    <p>Hello,</p>
    <p>We received a request to reset your password. Click below to proceed:</p>
    <a href="${resetLink}" style="display:inline-block;background:#0f4bb6;color:#fff;text-decoration:none;padding:10px 20px;border-radius:8px;">Reset Password</a>
    <p>If you didn’t request this, kindly ignore this email.</p>`;
  return sendEmail({
    to: email,
    subject: "Password Reset - Tradaxlink",
    html: wrap(html, "Password Reset"),
  });
}

// 4. Deposit notification
async function depositNotification({ email, amount, method, status }) {
  const html = `
    <p>Hello,</p>
    <p>Your deposit of <b>${amount}</b> via <b>${method}</b> has been <b>${status}</b>.</p>
    <p>Thank you for funding your account with Tradaxlink.</p>`;
  return sendEmail({
    to: email,
    subject: "Deposit Notification",
    html: wrap(html, "Deposit Update"),
  });
}

// 5. Withdrawal request
async function withdrawalRequest({ email, amount, address }) {
  const html = `
    <p>Hello,</p>
    <p>Your withdrawal request has been received and is currently being processed.</p>
    <p><b>Amount:</b> ${amount}<br/>
    <b>Wallet Address:</b> ${address}</p>`;
  return sendEmail({
    to: email,
    subject: "Withdrawal Request Received",
    html: wrap(html, "Withdrawal Request"),
  });
}

// 6. Investment plan activation
async function planActivated({ email, plan, amount }) {
  const html = `
    <p>Hello,</p>
    <p>Your investment plan has been successfully activated.</p>
    <p><b>Plan:</b> ${plan}<br/>
    <b>Amount:</b> ${amount}</p>
    <p>Start earning returns automatically as per the plan terms.</p>`;
  return sendEmail({
    to: email,
    subject: "Investment Plan Activated",
    html: wrap(html, "Plan Activated"),
  });
}

// 7. Admin alert for withdrawal
async function adminWithdrawalAlert({ userEmail, amount }) {
  const html = `
    <p>Admin,</p>
    <p>A withdrawal request has been made.</p>
    <p><b>User:</b> ${userEmail}<br/>
    <b>Amount:</b> ${amount}</p>`;
  return sendEmail({
    to: "support@tradaxlink.com",
    subject: "Withdrawal Request Alert",
    html: wrap(html, "Withdrawal Request Alert"),
  });
}

// 8. Login alert
async function loginAlert({ email, ip, location }) {
  const html = `
    <p>Hello,</p>
    <p>A login to your account was detected:</p>
    <p><b>IP:</b> ${ip}<br/>
    <b>Location:</b> ${location}</p>
    <p>If this wasn’t you, please change your password immediately.</p>`;
  return sendEmail({
    to: email,
    subject: "Login Alert - Tradaxlink",
    html: wrap(html, "Login Alert"),
  });
}

// 9. Support reply
async function supportReply({ email, message }) {
  const html = `
    <p>Hello,</p>
    <p>${message}</p>
    <p>Thank you for contacting Tradaxlink support.</p>`;
  return sendEmail({
    to: email,
    subject: "Response from Tradaxlink Support",
    html: wrap(html, "Support Response"),
  });
}

// 10. KYC Approved
async function kycApproved({ email }) {
  const html = `
    <p>Hello,</p>
    <p>Your KYC verification has been approved. You can now access all platform features.</p>`;
  return sendEmail({
    to: email,
    subject: "KYC Approved - Tradaxlink",
    html: wrap(html, "KYC Approved"),
  });
}

// 11. KYC Rejected
async function kycRejected({ email, reason }) {
  const html = `
    <p>Hello,</p>
    <p>Your KYC submission was rejected.</p>
    <p><b>Reason:</b> ${reason}</p>
    <p>Please review your details and resubmit your verification documents.</p>`;
  return sendEmail({
    to: email,
    subject: "KYC Rejected - Tradaxlink",
    html: wrap(html, "KYC Rejected"),
  });
}

// 12. Trade opened
async function tradeOpened({ email, pair, amount }) {
  const html = `
    <p>Hello,</p>
    <p>Your trade has been successfully opened.</p>
    <p><b>Pair:</b> ${pair}<br/>
    <b>Amount:</b> ${amount}</p>
    <p>Track your trade performance on your dashboard.</p>`;
  return sendEmail({
    to: email,
    subject: "Trade Opened - Tradaxlink",
    html: wrap(html, "Trade Opened"),
  });
}

// 13. Trade closed
async function tradeClosed({ email, pair, result }) {
  const html = `
    <p>Hello,</p>
    <p>Your trade has been closed.</p>
    <p><b>Pair:</b> ${pair}<br/>
    <b>Result:</b> ${result}</p>
    <p>Check your account balance for the updated returns.</p>`;
  return sendEmail({
    to: email,
    subject: "Trade Closed - Tradaxlink",
    html: wrap(html, "Trade Closed"),
  });
}

// 14. Profit update
async function profitUpdate({ email, profit }) {
  const html = `
    <p>Hello,</p>
    <p>Your profit update is available.</p>
    <p><b>Profit:</b> ${profit}</p>
    <p>Log in to view detailed analytics of your investment performance.</p>`;
  return sendEmail({
    to: email,
    subject: "Profit Update - Tradaxlink",
    html: wrap(html, "Profit Update"),
  });
}

export async function depositRequestEmail(username, amount, method) {
  return wrap(`
    <h2>Deposit Request Received</h2>
    <p>Hello <strong>${username}</strong>,</p>
    <p>Your deposit request of <strong>$${amount}</strong> via <strong>${method}</strong> has been successfully received.</p>
    <p>A bespoke wallet address will be sent to you shortly. Please proceed with payment and await confirmation.</p>
    <p>If you have any questions, contact us at <a href="mailto:support@tradaxlink.com">support@tradaxlink.com</a>.</p>
    <p>Thank you for choosing <strong>Tradaxlink</strong>.</p>
  `);
}


export async function adminDepositRequestEmail(username, amount, method) {
  return wrap(`
    <h2>New Deposit Request</h2>
    <p><strong>${username}</strong> has requested a deposit.</p>
    <ul>
      <li><strong>Amount:</strong> $${amount}</li>
      <li><strong>Method:</strong> ${method}</li>
    </ul>
    <p>Please generate and send a bespoke wallet address to this user.</p>
    <p>Support Team: <a href="mailto:support@tradaxlink.com">support@tradaxlink.com</a></p>
  `);
}


// 15. Referral bonus
async function referralBonus({ email, referrer, bonus }) {
  const html = `
    <p>Hello,</p>
    <p>You’ve earned a referral bonus!</p>
    <p><b>Referrer:</b> ${referrer}<br/>
    <b>Bonus:</b> ${bonus}</p>
    <p>Thank you for spreading the word about Tradaxlink.</p>`;
  return sendEmail({
    to: email,
    subject: "Referral Bonus - Tradaxlink",
    html: wrap(html, "Referral Bonus"),
  });
}

// 16. Account welcome
async function accountWelcome({ email, firstName }) {
  const html = `
    <p>Hello ${firstName},</p>
    <p>Welcome to Tradaxlink! Your trading journey begins here.</p>
    <p>We’re excited to have you onboard.</p>`;
  return sendEmail({
    to: email,
    subject: "Welcome to Tradaxlink",
    html: wrap(html, "Welcome to Tradaxlink"),
  });
}

export {
  hashPassword,
  compareHashedPassword,
  sendEmail,
  userRegistration,
  sendOTPEmail,
  passwordReset,
  depositNotification,
  withdrawalRequest,
  planActivated,
  adminWithdrawalAlert,
  loginAlert,
  supportReply,
  adminDepositRequestEmail,
  depositRequestEmail,
  kycApproved,
  kycRejected,
  tradeOpened,
  tradeClosed,
  profitUpdate,
  referralBonus,
  accountWelcome,
};
