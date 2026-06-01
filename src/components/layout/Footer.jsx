import { motion } from "framer-motion";
import "./Footer.css";

const socials = [
  { name: "Instagram", href: "https://instagram.com/roshni878" },
  { name: "Threads", href: "https://www.threads.com/@roshni878" },
  { name: "Facebook", href: "https://facebook.com/roshni.joshy" },
];

const navLinks = ["About", "Content", "Collabs", "Shop", "Contact"];

const ease = [0.22, 1, 0.36, 1];

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease }}
    >
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-logo">Roshni Vineeth</p>
            <p className="footer-tagline">Fashion · Lifestyle · Beauty</p>
          </div>
          <nav className="footer-nav">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
            ))}
          </nav>
          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer">{s.name}</a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Roshni Vineeth. All rights reserved.</p>
          <p className="footer-sub">Kerala, India</p>
        </div>
      </div>
    </motion.footer>
  );
}
