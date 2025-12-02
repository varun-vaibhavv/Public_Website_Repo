import Contact from '../models/contactModel.js';

export const submitMessage = async (req, res) => {
  try {
    const { name, email, message, createdAt } = req.body;
    const newMessage = await Contact.create({ name, email, message, createdAt });
    res.status(201).json({ message: "Message received successfully!", data: newMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
