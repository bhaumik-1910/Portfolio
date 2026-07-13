import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Config
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use SSL/TLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Routes
app.get('/', (req, res) => {
    res.send('Portfolio Backend Server is running successfully!');
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        console.log('API RECIEVED SUBMISSION:', { name, email, subject, message });
        console.log('CURRENT EMAIL_USER:', process.env.EMAIL_USER);
        console.log('CURRENT EMAIL_PASS:', process.env.EMAIL_PASS);

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please fill all required fields.' });
        }

        const timestamp = new Date().toISOString();

        // Send email via Nodemailer
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `Portfolio Contact Form: ${subject || 'New Message'}`,
            text: `You have received a new message from your portfolio contact form.\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Subject: ${subject}\n\n` +
                `Message:\n${message}\n\n` +
                `Timestamp: ${timestamp}`,
            html: `
                <div style="background-color: #0f172a; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100%;">
                    <div style="max-width: 600px; width: 100%; background: #1e293b; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3); overflow: hidden; margin: 0 auto; text-align: left;">
                        
                        <!-- Top Gradient Bar -->
                        <div style="height: 6px; background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);"></div>
                        
                        <!-- Container Header -->
                        <div style="padding: 32px 32px 20px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
                            <div style="display: inline-block; padding: 12px; background: rgba(59, 130, 246, 0.1); border-radius: 12px; margin-bottom: 16px;">
                                <span style="font-size: 28px; line-height: 1;">✉️</span>
                            </div>
                            <h2 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.01em;">New Portfolio Enquiry</h2>
                            <p style="margin: 6px 0 0; font-size: 14px; color: #94a3b8;">You received a message via your personal portfolio website.</p>
                        </div>
                        
                        <!-- Info Grid Details -->
                        <div style="padding: 24px 32px; background: rgba(15, 23, 42, 0.455);">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; width: 35%;">Sender Name</td>
                                    <td style="padding: 10px 0; font-size: 15px; color: #f1f5f9; font-weight: 500;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Email Address</td>
                                    <td style="padding: 10px 0; font-size: 15px; color: #3b82f6; font-weight: 500;">
                                        <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; border-bottom: 1px dashed rgba(59, 130, 246, 0.4);">${email}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
                                    <td style="padding: 10px 0; font-size: 15px; color: #f1f5f9; font-weight: 500;">${subject || 'No Subject'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Received At</td>
                                    <td style="padding: 10px 0; font-size: 14px; color: #94a3b8;">${timestamp}</td>
                                </tr>
                            </table>
                        </div>

                        <!-- Message Content Box -->
                        <div style="padding: 32px; border-top: 1px solid rgba(255, 255, 255, 0.06); background: #1e293b;">
                            <div style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Submitted Message</div>
                            <div style="background-color: #0f172a; padding: 20px; border-left: 4px solid #8b5cf6; border-radius: 8px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);">
                                <p style="margin: 0; font-size: 15px; color: #e2e8f0; line-height: 1.6; white-space: pre-wrap; font-family: inherit;">${message}</p>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div style="padding: 24px 32px; background: #0f172a; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.06);">
                            <p style="margin: 0; font-size: 11px; color: #64748b; line-height: 1.5;">© ${new Date().getFullYear()} Bhaumik Kothiya. All rights reserved.</p>
                            <p style="margin: 4px 0 0; font-size: 10px; color: #475569;">Received via Portfolio Contact System.</p>
                        </div>
                    </div>
                </div>
            `
        };

        if (process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'your_gmail_app_password_here') {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully!');
            res.status(200).json({ message: 'Message sent and email delivered successfully!' });
        } else {
            console.warn('Email credentials not configured yet.');
            res.status(400).json({
                error: 'Email SMTP credentials are not configured yet on the server.'
            });
        }
    } catch (error) {
        console.error('Error during contact form backend submission:', error);
        res.status(500).json({
            error: 'Server processed the message but failed to deliver the email. Please check backend log/SMTP config.'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});

// Trigger nodemon reload

