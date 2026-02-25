import nodemailer from 'nodemailer';
import { SMTP_PASS, SMTP_USER } from './constants';

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
    }
});