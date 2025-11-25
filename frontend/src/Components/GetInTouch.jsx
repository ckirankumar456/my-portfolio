import React, { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Failed to send message. Try again.");
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <p>
              Thanks for visiting my portfolio! I’m always open to discussing
              new projects, creative ideas, and exciting opportunities to
              collaborate. As a fresher, I’m eager to kickstart my professional
              journey, contribute to impactful real-time projects, and grow
              within a supportive, innovative team. I’m available for immediate
              joining and ready to give my best.
            </p>
            <h2>Get in Touch</h2>
            <div className="contact-info">
              <p>
                <i className="fa-solid fa-square-phone"></i>{" "}
                <a href="tel:+919502693776">+91 9502693776</a>
              </p>
              <p>
                <i className="fa-solid fa-square-envelope"></i>{" "}
                <a href="mailto:kirankumarc776@gmail.com">
                  kirankumarc776@gmail.com
                </a>
              </p>
            </div>
            <button className="resume-btn">
              <a
                href=" https://drive.google.com/file/d/1C-9D0EskkuuX8gnqfGFk0XN4_TP8LsgH/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </button>
            <div className="footer-social">
              <div className="social-links">
                <a
                  href="https://github.com/ckirankumar456?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kiran-kumar-b58564243/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-square-linkedin"></i>
                </a>
              </div>
              <p className="footer-name">Chinna Obannagari Kiran Kumar</p>
            </div>
          </div>
          <div className="contact-right">
            <p>
              Use this form to contact me directly your message will be sent
              straight to my inbox.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="send-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="footer">
        <hr className="footer-line" />
        <div className="footer-content">
          <p className="footer-right">
            © 2025 Kiran Kumar All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default GetInTouch;
