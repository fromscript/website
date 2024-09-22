import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email } = req.body;

        // Create a Nodemailer transporter using Mailtrap's SMTP credentials
        const transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: 'your_mailtrap_username', // Replace with your Mailtrap username
                pass: 'your_mailtrap_password', // Replace with your Mailtrap password
            },
        });

        // Email options
        const mailOptions = {
            from: '"FromScript" <noreply@fromscript.ca>', // Sender address
            to: 'info@fromscript.ca', // Recipient (can be your email address for now)
            subject: 'New Subscription Request', // Subject line
            text: `Name: ${name}\nEmail: ${email}`, // Plain text body
            html: `<p>Name: <strong>${name}</strong></p><p>Email: <strong>${email}</strong></p>`, // HTML body
        };

        try {
            // Send the email using the transporter
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error sending email', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
