import express from 'express';
import { submitMessage } from '../controllers/contactController.js';

const router = express.Router();

router.post('/submit', submitMessage);

export default router;