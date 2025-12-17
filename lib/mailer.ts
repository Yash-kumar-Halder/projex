import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport(
    {
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false,
        auth: {
            user: "8a63ea001@smtp-brevo.com",
            pass: process.env.BREVO_SMTP_KEY,
        }
    }
)
