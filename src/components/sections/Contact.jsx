import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0.2 };

const formContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const formItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setSending(false);
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
        setSending(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">

        <motion.div
          className="contact-text"
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.75, ease }}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's Create Together</h2>
          <p>Interested in a collaboration or brand partnership? I'd love to hear from you.</p>
          <p style={{ marginTop: "1rem" }}>
            📧 <a href="mailto:roshnifuture@gmail.com">roshnifuture@gmail.com</a>
          </p>
          <a href="/media-kit.pdf" className="media-kit-btn" download>Download Media Kit</a>
        </motion.div>

        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
        >
          {sent ? (
            <motion.div
              className="contact-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease }}
            >
              <p>✦ Thanks! I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={formContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <motion.input variants={formItem} name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              <motion.input variants={formItem} name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
              <motion.textarea variants={formItem} name="message" placeholder="Tell me about your project..." rows={5} value={form.message} onChange={handleChange} required />
              {error && <p style={{ color: "red", fontSize: "0.85rem" }}>{error}</p>}
              <motion.button variants={formItem} type="submit" className="btn-primary" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
