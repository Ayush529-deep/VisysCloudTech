import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // ✅ Save to MongoDB
    const newContact = new Contact({
      fullName,
      email,
      phone,
      message,
    });

    await newContact.save();

    // ✅ Setup Email Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // you receive email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent & email delivered ✅",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;

























// import express from "express";
// import Contact from "../models/Contact.js";

// const router = express.Router();

// // 👉 POST - Save Contact Form Data
// router.post("/", async (req, res) => {
//   try {
//     const { fullName, email, phone, message } = req.body;

//     if (!fullName || !email || !message) {
//       return res.status(400).json({ message: "Required fields missing" });
//     }

//     const newContact = new Contact({
//       fullName,
//       email,
//       phone,
//       message,
//     });

//     await newContact.save();

//     res.status(201).json({
//       success: true,
//       message: "Message sent successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 👉 GET - Get All Contact Messages (optional - for admin)
// router.get("/", async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     res.json(contacts);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;
