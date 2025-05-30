import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Simple email validation regex
const isValidEmail = (email: string): boolean => {
    if (!email) return false; // handle case where email might be null or undefined before regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, projectType, message } = body;

    // --- Start Validation ---
    const missingFields: string[] = []; // <-- EXPLICIT TYPE ADDED
    if (!name) missingFields.push('name');
    if (!email) missingFields.push('email');
    if (!projectType) missingFields.push('projectType');
    if (!message) missingFields.push('message');

    if (missingFields.length > 0) {
        return NextResponse.json(
            { message: `Missing required fields: ${missingFields.join(', ')}` },
            { status: 400 }
        );
    }

    if (!isValidEmail(email)) {
        return NextResponse.json(
            { message: 'Invalid email format.' },
            { status: 400 }
        );
    }
    // --- End Validation ---

    try {
        const transporter = nodemailer.createTransport({
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
        return NextResponse.json({ message: 'Error sending email. Please try again later.' }, { status: 500 });
    }
}
