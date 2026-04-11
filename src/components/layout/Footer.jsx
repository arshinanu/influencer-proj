import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-logo">Roshni Vineeth</p>
        <p className="footer-copy">© {new Date().getFullYear()} Roshni Vineeth. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://instagram.com/roshni878" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.threads.com/@roshni878" target="_blank" rel="noreferrer">Threads</a>
          <a href="https://facebook.com/roshni.joshy" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
