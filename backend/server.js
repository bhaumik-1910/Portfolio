import express from 'express';
import cors from 'cors';
import fs from 'fs-extra';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;
const DATA_FILE = path.join(__dirname, 'submissions.json');

// Middleware
app.use(cors());
app.use(express.json());

// Ensure JSON file exists
const ensureDataFile = async () => {
    if (!(await fs.pathExists(DATA_FILE))) {
        await fs.writeJson(DATA_FILE, []);
    }
};

// Routes
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please fill all required fields.' });
        }

        const newSubmission = {
            id: Date.now(),
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString(),
        };

        await ensureDataFile();
        const submissions = await fs.readJson(DATA_FILE);
        submissions.push(newSubmission);
        await fs.writeJson(DATA_FILE, submissions, { spaces: 2 });

        console.log('New submission received:', newSubmission);
        res.status(200).json({ message: 'Submission saved successfully!' });
    } catch (error) {
        console.error('Error saving submission:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Start server
app.listen(PORT, async () => {
    await ensureDataFile();
    console.log(`Backend server running at http://localhost:${PORT}`);
});
