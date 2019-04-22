import { adjectives, nouns } from "./word";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
  };


export const sendmail = (email) => {
    const options = {
        auth: {
            api_user: process.env.SENDGRID_USERNAME,
            api_key: process.env.SENGRID_PASSWORD
          }        
    }

    const client = nodemailer.createTransport(sgTransport(options));
    return client.sendMail(email);
};

export const sendSecretMail = (adress, secret) => {
    const email = {
        from: "xogus1015@prismagram.com",
        to: email,
        subject: "Login Secret for Instargram",
        HTML: `Hello! Your Login secret it ${secret}. <br/> Copy paste on the app/website to log in`
    }

    return sendmail(email);
}