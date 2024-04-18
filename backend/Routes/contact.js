import express from 'express';
const router = express.Router();
import {Contact} from '../Models/contact.js'
router.post("/post", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: "Name, email, and message are required." });
        }
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(200).json({ message: "Data Saved" });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ error: "An internal server error occurred." });
    }
});

export default router;

