import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from '../src/config/db.js';
import mongoose from 'mongoose';


dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

const getIndianTime = () => {
    const date = new Date();
    const offset = 5.5 * 60 * 60 * 1000;
    const indiaTime = new Date(date.getTime() + offset);
    return indiaTime;
};

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: getIndianTime }
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('❌ Error saving contact:', error);
        res.status(500).json({ message: 'Error saving contact' });
    }
});

export default app;
