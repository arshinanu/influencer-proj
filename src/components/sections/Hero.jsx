import "./Hero.css";
import roshni from "../../assets/roshni.jpg";
 import heroVideo from "../../assets/hero.mp4"; // ← drop your video file in assets and uncomment

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-video-wrap">
        { <video className="hero-video" src={heroVideo} autoPlay muted loop playsInline /> }
        <div className="hero-video-overlay" />
      </div>
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="section-label">Fashion · Lifestyle · Beauty</span>
          <h1 className="hero-title">Hi, I'm <span className="hero-accent">Roshni</span> ✦</h1>
          <p className="hero-sub">
            Mom of two boys · Certified pastry chef · Fashionista — making high fashion
            approachable, one saree at a time.
          </p>
          <div className="hero-actions">
            <a href="#content" className="btn-primary">See My Content</a>
            <a href="#contact" className="btn-outline">Work With Me</a>
          </div>
          <div className="hero-socials">
            <a href="https://instagram.com/roshni878" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.threads.com/@roshni878" target="_blank" rel="noreferrer">Threads</a>
            <a href="https://facebook.com/roshni.joshy" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={roshni} alt="Roshni Vineeth" className="hero-photo" />
          <div className="hero-badge">✦ 135K+ Followers</div>
        </div>
      </div>
    </section>
  );
}
