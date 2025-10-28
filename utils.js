const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const axios = require("axios");
const speakeasy = require("speakeasy");
const { Resend } = require("resend"); // ✅ Correct import
const secret = speakeasy.generateSecret({ length: 4 });

const resend = new Resend(process.env.RESEND_API_KEY); // ✅ Must initialize with your API key

// Hash password
const hashPassword = (password) => bcrypt.hashSync(password, salt);

// Compare hashed password
const compareHashedPassword = (hashedPassword, password) =>
  bcrypt.compareSync(password, hashedPassword);

// Send withdrawal notification email
const sendWithdrawalRequestEmail = async ({ from, amount, method, address }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER || "no-reply@tradaxlink.com", // ✅ use a verified sender domain
      to: "support@tradaxlink.com",
      subject: "Transaction Notification",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a73e8; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 0 0 5px 5px; }
            .footer { margin-top: 20px; text-align: center; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>Transaction Notification</h2>
          </div>
          <div class="content">
            <p>Hello Chief,</p>
            <p><strong>${from}</strong> has requested a withdrawal:</p>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Amount:</strong> $${amount}</li>
              <li><strong>Method:</strong> ${method}</li>
              <li><strong>Wallet Address:</strong> ${address}</li>
            </ul>
            <p>Please review this request at your earliest convenience.</p>
          </div>
          <div class="footer">
            <p>Best regards,<br>tradaxlink Team</p>
          </div>
        </body>
        </html>
      `
    });

    console.log("✅ Withdrawal request email sent successfully");
  } catch (error) {
    console.error("❌ Error sending withdrawal request email:", error);
    throw error;
  }
};


const userRegisteration = async ({ firstName, email }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: "support@tradaxlink.com",
      subject: "Transaction Notification",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a73e8; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 0 0 5px 5px; }
            .footer { margin-top: 20px; text-align: center; color: #666; font-size: 14px; }
            .highlight { color: #1a73e8; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>New User Registration</h2>
          </div>
          <div class="content">
            <p>Hello Chief,</p>
            <p>A new user has registered on the platform:</p>
            <ul style="list-style: none; padding: 0;">
              <li>Name: <span class="highlight">${firstName}</span></li>
              <li>Email: <span class="highlight">${email}</span></li>
            </ul>
            <p>Please visit your dashboard to review and confirm this registration.</p>
          </div>
          <div class="footer">
            <p>Best regards,<br>tradaxlink Team</p>
          </div>
        </body>
        </html>
      `
    });
    console.log('Registration notification email sent successfully');
  } catch (error) {
    console.error('Error sending registration notification email:', error);
    throw error;
  }
};

const sendWithdrawalEmail = async ({ to, address, amount, method, timestamp, from }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: to,
      subject: "Transaction Notification",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a73e8; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 0 0 5px 5px; }
            .details { background-color: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 5px; }
            .footer { margin-top: 20px; text-align: center; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>Withdrawal Request Confirmation</h2>
          </div>
          <div class="content">
            <p>Hello ${from},</p>
            <p>We have received your withdrawal request. Here are the details for your reference:</p>
            <div class="details">
              <p><strong>Amount:</strong> $${amount}</p>
              <p><strong>Wallet Address:</strong> ${address}</p>
              <p><strong>Payment Method:</strong> ${method}</p>
            </div>
            <p>Our team will process your request as soon as possible. You will receive another email once the withdrawal has been processed.</p>
          </div>
          <div class="footer">
            <p>Best regards,<br>tradaxlink Team</p>
          </div>
        </body>
        </html>
      `
    });
    console.log('Withdrawal notification email sent successfully');
  } catch (error) {
    console.error('Error sending withdrawal notification email:', error);
    throw error;
  }
};

const sendDepositEmail = async ({ from, amount, method, timestamp }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: "support@tradaxlink.com",
      subject: "Transaction Notification",
      html: `
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a73e8; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 0 0 5px 5px; }
            .transaction-details { background-color: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 5px; }
            .footer { margin-top: 20px; text-align: center; color: #666; font-size: 14px; }
            .highlight { color: #1a73e8; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>New Deposit Notification</h2>
          </div>
          <div class="content">
            <p>Hello Chief,</p>
            <p>A new deposit has been initiated:</p>
            <div class="transaction-details">
              <p><strong>User:</strong> <span class="highlight">${from}</span></p>
              <p><strong>Amount:</strong> <span class="highlight">$${amount}</span></p>
              <p><strong>Payment Method:</strong> ${method}</p>
              <p><strong>Time:</strong> ${timestamp}</p>
            </div>
            <p>Please verify this transaction and update the user's balance from your admin dashboard.</p>
          </div>
          <div class="footer">
            <p>Best regards,<br>tradaxlink Team</p>
          </div>
        </body>
        </html>
      `
    });
    console.log('Deposit notification email sent successfully');
  } catch (error) {
    console.error('Error sending deposit notification email:', error);
    throw error;
  }
};

const sendBankDepositRequestEmail = async ({ from, amount, method, timestamp }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: "support@tradaxlink.com",
      subject: "Transaction Notification",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a73e8; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 0 0 5px 5px; }
            .transaction-details { background-color: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 5px; }
            .footer { margin-top: 20px; text-align: center; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>Bank Transfer Request</h2>
          </div>
          <div class="content">
            <p>Hello Chief,</p>
            <p>A new bank transfer request has been received:</p>
            <div class="transaction-details">
              <p><strong>User:</strong> ${from}</p>
              <p><strong>Amount:</strong> $${amount}</p>
              <p><strong>Time:</strong> ${timestamp}</p>
            </div>
            <p>Please provide the necessary account details to process this request.</p>
          </div>
          <div class="footer">
            <p>Best regards,<br>tradaxlink Team</p>
          </div>
        </body>
        </html>
      `
    });
    console.log('Bank deposit request email sent successfully');
  } catch (error) {
    console.error('Error sending bank deposit request email:', error);
    throw error;
  }
};

const sendDepositApproval = async ({ from, amount, method, timestamp, to }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: to,
      subject: "Transaction Notification",
      html: `
        <html>
        <p>Hello ${from}</p>
        <p>Your deposit of ${amount} of ${method} has been approved.</p>
        <p>Kindly visit your dashboard for more information</p>
        <p>${timestamp}</p>
        <p>Best wishes,</p>
        <p>tradaxlink Team</p>
        </html>
      `
    });
    console.log('Deposit approval email sent successfully');
  } catch (error) {
    console.error('Error sending deposit approval email:', error);
    throw error;
  }
};

const sendPlanEmail = async ({ from, subamount, subname, timestamp }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: "support@tradaxlink.com",
      subject: "Transaction Notification",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a73e8; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 0 0 5px 5px; }
            .plan-details { background-color: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 5px; }
            .footer { margin-top: 20px; text-align: center; color: #666; font-size: 14px; }
            .highlight { color: #1a73e8; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>New Plan Subscription</h2>
          </div>
          <div class="content">
            <p>Hello Chief,</p>
            <p>A new plan subscription has been initiated:</p>
            <div class="plan-details">
              <p><strong>User:</strong> <span class="highlight">${from}</span></p>
              <p><strong>Plan:</strong> <span class="highlight">${subname}</span></p>
              <p><strong>Amount:</strong> $${subamount}</p>
              <p><strong>Time:</strong> ${timestamp}</p>
            </div>
            <p>Please verify this subscription and update the user's account accordingly.</p>
          </div>
          <div class="footer">
            <p>Best regards,<br>tradaxlink Team</p>
          </div>
        </body>
        </html>
      `
    });
    console.log('Plan subscription notification email sent successfully');
  } catch (error) {
    console.error('Error sending plan subscription notification email:', error);
    throw error;
  }
};

const sendVerificationEmail = async ({ from, url }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: "support@tradaxlink.com",
      subject: "Account Verification Notification",
      html: `
        <html>
        <p>Hello Chief</p>
        <p>${from} just verified his Bevfx Team Identity</p>
        <p>Click <a href="${url}">here</a> to view the document</p>
        <p>Best wishes,</p>
        <p>tradaxlink Team</p>
        </html>
      `
    });
    console.log('Verification notification email sent successfully');
  } catch (error) {
    console.error('Error sending verification notification email:', error);
    throw error;
  }
};

const sendWelcomeEmail = async ({ to, otp }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: to,
      subject: "Verify Your tradaxlink Account",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>tradaxlink Verification</title>
          <style>
            body {
              background-color: #f4f6f8;
              font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              color: #333;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              background: #ffffff;
              margin: 40px auto;
              border-radius: 12px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.06);
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #1a73e8, #1557b0);
              color: #ffffff;
              text-align: center;
              padding: 30px 20px;
            }
            .header img {
              width: 50px;
              height: 50px;
              margin-bottom: 10px;
            }
            .header h1 {
              font-size: 22px;
              margin: 0;
            }
            .content {
              padding: 30px 25px;
              text-align: left;
            }
            .content h2 {
              color: #1a73e8;
              font-size: 18px;
              margin-bottom: 10px;
            }
            .content p {
              line-height: 1.7;
              font-size: 15px;
              margin: 10px 0;
            }
            .otp-box {
              background: #f0f4ff;
              color: #1a73e8;
              font-size: 28px;
              letter-spacing: 6px;
              font-weight: bold;
              text-align: center;
              padding: 18px;
              border-radius: 8px;
              margin: 25px 0;
              border: 1px solid #d4e0ff;
            }
            .note {
              background: #f9fafb;
              padding: 12px;
              border-left: 4px solid #1a73e8;
              font-size: 14px;
              color: #555;
              margin-top: 10px;
            }
            .footer {
              background-color: #f8f9fa;
              text-align: center;
              padding: 20px;
              font-size: 13px;
              color: #888;
              border-top: 1px solid #e6e6e6;
            }
            .footer a {
              color: #1a73e8;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://tradaxlink.com/logo.png" alt="tradaxlink Logo" />
              <h1>Welcome to tradaxlink</h1>
            </div>
            <div class="content">
              <h2>Verify Your Email</h2>
              <p>Hello,</p>
              <p>Thank you for creating an account with <strong>tradaxlink</strong>. To protect your account, please use the verification code below to complete your registration:</p>

              <div class="otp-box">
                ${otp}
              </div>

              <p>This code will expire in <strong>5 minutes</strong>. For your security, never share this code with anyone—even a tradaxlink representative.</p>

              <div class="note">
                If you didn’t sign up for a tradaxlink account, please ignore this email or contact our support team immediately.
              </div>
            </div>
            <div class="footer">
              <p>Need help? Contact our <a href="mailto:support@tradaxlink.com">support team</a>.</p>
              <p>&copy; ${new Date().getFullYear()} tradaxlink. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
    });
    console.log("✅ Welcome email sent successfully");
  } catch (error) {
    console.error("❌ Error sending welcome email:", error);
    throw error;
  }
};


const resendWelcomeEmail = async ({ to, token }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: to,
      subject: 'Account Verification',
      html: `
        <html>
        <h2>Welcome to tradaxlink</h2>
        <p>Let us know if this is really your email address, 
        to help us keep your account secure
        </p>
        <p>Confirm your email and let's get started!</p>
        <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>
        <p>Best wishes,</p>
        <p>tradaxlink Team</p>
        </html>
      `
    });
    console.log('Welcome email sent successfully');
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
};

const resetEmail = async ({ to, token }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: to,
      subject: 'Change Password',
      html: `
        <html>
        <h2>Welcome to tradaxlink</h2>
        <p>You have requested to change your password. Please use the following OTP to reset your password.</p>
        <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>
        <p>If you did not request this password reset, please contact our support immediately.</p>
        <p>Best wishes,</p>
        <p>tradaxlink Team</p>
        </html>
      `
    });
    console.log('Password change email sent successfully');
  } catch (error) {
    console.error('Error sending password change email:', error);
    throw error;
  }
};

const sendUserPlanEmail = async ({ from, subamount, to, subname, timestamp }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: to,
      subject: 'Transaction Notification',
      html: `
        <html>
        <p>Hello ${from},</p>
        <p>You successfully subscribed to $${subamount} worth of ${subname} plan at ${timestamp}</p>
        <p>Best wishes,</p>
        <p>tradaxlink Team</p>
        </html>
      `
    });
    console.log('Plan subscription email sent successfully');
  } catch (error) {
    console.error('Error sending plan subscription email:', error);
    throw error;
  }
};

const sendUserDetails = async ({ to, password, firstName, token }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: to,
      subject: 'User Details',
      html: `
        <html>
        <h2>Hello ${firstName},</h2>
        <p>Thank you for registering on our site</p>
        <p>Your login information:</p>
        <p>Email: ${to}</p>
        <p>Password: ${password}</p>
        <p>If you did not authorize this registration, please contact our support immediately.</p>
        <p>Best wishes,</p>
        <p>tradaxlink Team</p>
        </html>
      `
    });
    console.log('User details email sent successfully');
  } catch (error) {
    console.error('Error sending user details email:', error);
    throw error;
  }
};



// Verification email function already implemented above

// Welcome email function already implemented above





// Resend welcome email function already implemented above

const sendPasswordOtp = async ({ to }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: to,
      subject: 'Password Reset',
      html: `
        <html>
        <h2>Welcome to tradaxlink</h2>
        <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>
        <p>This OTP is valid for a short period of time. Do not share it with anyone.</p>
        <p>If you did not request this OTP, please ignore this email.</p>
        <p>Best wishes,</p>
        <p>tradaxlink Team</p>
        </html>
      `
    });
    console.log('Password reset OTP email sent successfully');
  } catch (error) {
    console.error('Error sending password reset OTP email:', error);
    throw error;
  }
};



// Reset email function already implemented above







const sendUserDepositEmail = async ({ from, amount, to, method, timestamp }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: to,
      subject: 'Transaction Notification',
      html: `
        <html>
        <p>Hello ${from}</p>
        <p>You have sent a deposit order. Your deposit details are shown below for your reference</p>
        <p>From: ${from}</p>
        <p>Amount: $${amount}</p>
        <p>Method: ${method}</p>
        <p>Timestamp: ${timestamp}</p>
        <p>All payments are to be sent to your personal wallet address</p>
        <p>Best wishes,</p>
        <p>tradaxlink Team</p>
        </html>
      `
    });
    console.log('User deposit email sent successfully');
  } catch (error) {
    console.error('Error sending user deposit email:', error);
    throw error;
  }
};

// User plan email function already implemented above



// User details email function already implemented above



const sendKycAlert = async ({ firstName }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: "support@tradaxlink.com",
      subject: 'User Details',
      html: `
        <html>
        <h2>Hello Chief,</h2>
        <p>A user just submitted his/her KYC details.</p>
        <p>Kindly check your dashboard to view details</p>
        <p>Best wishes,</p>
        <p>tradaxlink Team</p>
        </html>
      `
    });
    console.log('KYC alert email sent successfully');
  } catch (error) {
    console.error('Error sending KYC alert email:', error);
    throw error;
  }
};

const sendForgotPasswordEmail = async ({ to }) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: to,
      subject: 'Password Reset',
      html: `
        <html>
        <p>Dear esteemed user,</p>
        <p>Forgot your password?</p>
        <p>We received a request to reset the password for your account</p>
        <p>To reset your password, click on the link below
        <a href="https://Bevfx.com/reset-password">reset password</a>
        </p>
        <p>If you did not make this request, please ignore this email</p>
        <p>Best wishes,</p>
        <p>tradaxlink Team</p>
        </html>
      `
    });
    console.log('Forgot password email sent successfully');
  } catch (error) {
    console.error('Error sending forgot password email:', error);
    throw error;
  }
};





module.exports = {
  hashPassword,
  userRegisteration,
  sendUserDepositEmail,
  compareHashedPassword,
  sendDepositEmail,
  sendPlanEmail,
  sendUserPlanEmail,
  sendDepositApproval,
  sendPasswordOtp,
  sendForgotPasswordEmail,
  sendVerificationEmail,
  sendBankDepositRequestEmail,
  sendWithdrawalEmail,
  sendWithdrawalRequestEmail,
  sendWelcomeEmail,
  resendWelcomeEmail,
  resetEmail,
  sendKycAlert,
  sendUserDetails
};
