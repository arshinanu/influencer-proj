import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
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
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
