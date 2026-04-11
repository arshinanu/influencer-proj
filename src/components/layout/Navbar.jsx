import { useState } from "react";
import "./Navbar.css";

const links = ["About", "Content", "Collabs", "Shop", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <a href="/" className="navbar-logo">Roshni Vineeth</a>
        <ul className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
          <li><a href="#contact" className="navbar-cta">Work With Me</a></li>
        </ul>
        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
