import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

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
        <div className="contact-text">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's Create Together</h2>
          <p>Interested in a collaboration or brand partnership? I'd love to hear from you.</p>
          <p style={{ marginTop: "1rem" }}>
            📧 <a href="mailto:roshnifuture@gmail.com">roshnifuture@gmail.com</a>
          </p>
          <a href="/media-kit.pdf" className="media-kit-btn" download>Download Media Kit</a>
        </div>
        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-success">
              <p>✦ Thanks! I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
              <textarea name="message" placeholder="Tell me about your project..." rows={5} value={form.message} onChange={handleChange} required />
              {error && <p style={{ color: "red", fontSize: "0.85rem" }}>{error}</p>}
              <button type="submit" className="btn-primary" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
