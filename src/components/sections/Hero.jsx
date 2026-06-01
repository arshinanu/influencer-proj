import { motion } from "framer-motion";
import "./Hero.css";
import roshni from "../../assets/roshni.jpg";
import roshni2 from "../../assets/roshni2.jpg";
import roshni3 from "../../assets/roshni3.jpg";
import roshni4 from "../../assets/roshni4.jpg";

const ease = [0.22, 1, 0.36, 1];

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const textItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const visualVariant = {
  hidden: { opacity: 0, x: 40, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.95, ease, delay: 0.15 } },
};

const pillVariant = {
  hidden: { opacity: 0, x: -20, y: 10 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease, delay: 0.65 } },
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 0.8, scale: 1, transition: { duration: 0.6, ease, delay: 0.6 } },
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow hero-glow--yellow" />
      <div className="hero-glow hero-glow--teal" />
      <div className="container hero-inner">

        <motion.div
          className="hero-text"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="section-label" variants={textItem}>Fashion · Lifestyle · Beauty</motion.span>
          <motion.h1 className="hero-title" variants={textItem}>
            Hi, I'm <span className="hero-title-accent">Roshni</span> ✦
          </motion.h1>
          <motion.p className="hero-sub" variants={textItem}>
            Mom of two boys · Certified pastry chef · Fashionista — making high fashion
            approachable, one saree at a time.
          </motion.p>
          <motion.div className="hero-actions" variants={textItem}>
            <a href="#content" className="btn-accent">See My Content</a>
            <a href="#contact" className="btn-ghost">
              Work With Me <span className="btn-arrow">→</span>
            </a>
          </motion.div>
          <motion.div className="hero-socials" variants={textItem}>
            <a href="https://instagram.com/roshni878" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.threads.com/@roshni878" target="_blank" rel="noreferrer">Threads</a>
            <a href="https://facebook.com/roshni.joshy" target="_blank" rel="noreferrer">Facebook</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          variants={visualVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-portrait-wrap">
            <motion.img
              src={roshni}
              alt="Roshni Vineeth"
              className="hero-portrait"
              initial={{ clipPath: "circle(0% at 50% 105%)" }}
              animate={{ clipPath: "circle(150% at 50% 105%)" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            />
            <span className="splash-drop splash-drop--1" />
            <span className="splash-drop splash-drop--2" />
            <span className="splash-drop splash-drop--3" />
            <span className="splash-drop splash-drop--4" />
            <span className="splash-drop splash-drop--5" />
            <span className="splash-drop splash-drop--6" />
          </div>

          <motion.div className="hero-badge-spin" variants={badgeVariant} initial="hidden" animate="visible">
            <svg viewBox="0 0 100 100" width="88" height="88">
              <defs>
                <path id="bp" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="10.5" fill="rgba(255,255,255,0.72)" letterSpacing="2.8">
                <textPath href="#bp">ROSHNI VINEETH · FASHION · LIFESTYLE ·</textPath>
              </text>
              <circle cx="50" cy="50" r="4" fill="white" opacity="0.72" />
            </svg>
          </motion.div>

          <motion.div className="hero-stat-pill" variants={pillVariant} initial="hidden" animate="visible">
            <div className="hero-avatars">
              <img src={roshni2} alt="" className="hero-avatar" />
              <img src={roshni3} alt="" className="hero-avatar" />
              <img src={roshni4} alt="" className="hero-avatar" />
            </div>
            <div className="hero-stat-text">
              135K+ <span>Followers</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
