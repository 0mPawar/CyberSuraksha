/**
 * CyberSuraksha Email Service
 * Handles transactional emails (registration, password reset, change password) via Nodemailer.
 * Strictly adheres to security rules: NEVER logs OTP values, NEVER exposes SMTP secrets.
 */

const nodemailer = require('nodemailer');
const config = require('../config/environmentconfig');
const logger = require('../utils/loggerutil');

let transporter = null;

function getTransporter() {
  if (!transporter && config.smtp.host) {
    transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.secure,
      auth: config.smtp.user
        ? {
            user: config.smtp.user,
            pass: config.smtp.pass
          }
        : undefined
    });
  }
  return transporter;
}

const emailservice = {
  /**
   * Internal sender helper
   * @param {{ to: string, subject: string, text: string, html: string }} mailOptions
   */
  async sendMail({ to, subject, text, html }) {
    const client = getTransporter();

    if (!client) {
      if (config.isProduction) {
        logger.error('OTP', 'Email service failure: SMTP configuration is missing in production');
        throw new Error('Email delivery service is currently unavailable. Please contact system administrator.');
      }
      // Safe development/test simulation (DO NOT LOG OTP VALUE)
      logger.info('OTP', `[DEV/TEST MODE] Simulated email delivery to: ${to} | Subject: "${subject}"`);
      return { simulated: true, to };
    }

    try {
      const info = await client.sendMail({
        from: config.smtp.from,
        to,
        subject,
        text,
        html
      });
      logger.info('OTP', `Transactional email sent successfully to ${to} (MessageId: ${info.messageId})`);
      return info;
    } catch (err) {
      logger.error('OTP', `Failed to send email to ${to}`, err);
      throw new Error('Failed to send verification email. Please try again later.');
    }
  },

  /**
   * Send Registration OTP Email
   * @param {string} to
   * @param {string} otp
   * @param {string} name
   */
  async sendRegistrationOtpEmail(to, otp, name = 'User') {
    const subject = 'CyberSuraksha — Verify Your Email Address';
    const text = `Hello ${name},\n\nWelcome to CyberSuraksha. Your one-time verification code is: ${otp}\n\nThis code will expire in ${config.otp.expiryMinutes} minutes. Do not share this code with anyone.\n\nStay Safe Online,\nCyberSuraksha Team`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #1a365d; margin-bottom: 10px;">CyberSuraksha</h2>
        <p style="color: #4a5568; font-size: 16px;">Hello <strong>${name}</strong>,</p>
        <p style="color: #4a5568;">Thank you for registering with CyberSuraksha. To complete your registration and activate your account, please verify your email address using the code below:</p>
        <div style="background-color: #f7fafc; padding: 15px; text-align: center; border-radius: 6px; margin: 25px 0;">
          <span style="font-size: 28px; font-weight: bold; letter-spacing: 6px; color: #2b6cb0;">${otp}</span>
        </div>
        <p style="color: #718096; font-size: 14px;">This code will expire in <strong>${config.otp.expiryMinutes} minutes</strong>. If you did not create an account on CyberSuraksha, please ignore this email.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #a0aec0; font-size: 12px; text-align: center;">CyberSuraksha — Community Engagement for Cyber Safety</p>
      </div>
    `;

    return this.sendMail({ to, subject, text, html });
  },

  /**
   * Send Password Reset OTP Email
   * @param {string} to
   * @param {string} otp
   * @param {string} name
   */
  async sendForgotPasswordOtpEmail(to, otp, name = 'User') {
    const subject = 'CyberSuraksha — Password Reset Verification Code';
    const text = `Hello ${name},\n\nA request was received to reset your CyberSuraksha password. Your verification code is: ${otp}\n\nThis code will expire in ${config.otp.expiryMinutes} minutes. If you did not request this, please secure your account immediately.\n\nCyberSuraksha Team`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #c53030; margin-bottom: 10px;">CyberSuraksha Security Alert</h2>
        <p style="color: #4a5568; font-size: 16px;">Hello <strong>${name}</strong>,</p>
        <p style="color: #4a5568;">We received a request to reset your CyberSuraksha account password. Use the verification code below to authorize the reset:</p>
        <div style="background-color: #fff5f5; padding: 15px; text-align: center; border-radius: 6px; margin: 25px 0; border: 1px solid #fed7d7;">
          <span style="font-size: 28px; font-weight: bold; letter-spacing: 6px; color: #e53e3e;">${otp}</span>
        </div>
        <p style="color: #718096; font-size: 14px;">This code will expire in <strong>${config.otp.expiryMinutes} minutes</strong>. If you did not initiate this request, your account may be compromised. Please contact support immediately.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #a0aec0; font-size: 12px; text-align: center;">CyberSuraksha — Community Engagement for Cyber Safety</p>
      </div>
    `;

    return this.sendMail({ to, subject, text, html });
  },

  /**
   * Send Authenticated Password Change OTP Email
   * @param {string} to
   * @param {string} otp
   * @param {string} name
   */
  async sendChangePasswordOtpEmail(to, otp, name = 'User') {
    const subject = 'CyberSuraksha — Confirm Password Change';
    const text = `Hello ${name},\n\nYou requested to change your CyberSuraksha account password. Your authorization code is: ${otp}\n\nThis code will expire in ${config.otp.expiryMinutes} minutes. Do not share it with anyone.\n\nCyberSuraksha Team`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #2c5282; margin-bottom: 10px;">CyberSuraksha Security</h2>
        <p style="color: #4a5568; font-size: 16px;">Hello <strong>${name}</strong>,</p>
        <p style="color: #4a5568;">You requested to change your password while signed in. Enter the authorization code below to confirm this action:</p>
        <div style="background-color: #ebf8ff; padding: 15px; text-align: center; border-radius: 6px; margin: 25px 0; border: 1px solid #bee3f8;">
          <span style="font-size: 28px; font-weight: bold; letter-spacing: 6px; color: #2b6cb0;">${otp}</span>
        </div>
        <p style="color: #718096; font-size: 14px;">This code is valid for <strong>${config.otp.expiryMinutes} minutes</strong>. If you did not initiate this change, sign out of all active sessions immediately.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #a0aec0; font-size: 12px; text-align: center;">CyberSuraksha — Community Engagement for Cyber Safety</p>
      </div>
    `;

    return this.sendMail({ to, subject, text, html });
  }
};

module.exports = emailservice;

