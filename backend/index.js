import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kirankumarc776@gmail.com",
        pass: "muqr zgmd ksbb tnbv",
      },
    });
    const mailOptions = {
      from: email,
      to: "kirankumarc776@gmail.com",
      subject: `Subject: ${subject}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
