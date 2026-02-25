import { SMTP_USER } from "../config/constants";
import { transporter } from "../config/nodemailer";

export const sendFileMail = async(sender: string, receiver: string, fileUrl: string) => {
    
    const info = await transporter.sendMail({
        from: sender,
        to: receiver,
        subject: `You received a file from ${sender}`,
        html: `
        <p>${sender} sent you a file:</p>
        <a href="${fileUrl}" target="_blank">Download File</a>
        `
    });
    console.log("Mail sended.", info.messageId);
};