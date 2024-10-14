import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { name, email, projectType, message } = await req.json();

    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: '"WebSite Submission" <noreply@fromscript.ca>',
            replyTo: email,
            to: 'info@fromscript.ca',
            subject: 'New WebSite Submission Request',
            text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Project Type:</strong> ${projectType}</p>
             <p><strong>Message:</strong> ${message}</p>`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
    }
}
