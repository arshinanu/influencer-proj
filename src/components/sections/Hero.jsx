import { motion } from "framer-motion";
import "./Hero.css";

const ease = [0.22, 1, 0.36, 1];

const titleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
};

const titleWord = {
  hidden: { opacity: 0, y: 80, filter: "blur(16px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease } },
};

const starVariant = {
  hidden: { opacity: 0, scale: 0.3, rotate: -120 },
  visible: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 0.8, ease, delay: 0.72 },
  },
};

const labelVariant = {
  hidden: { opacity: 0, letterSpacing: "0.4em" },
  visible: {
    opacity: 1, letterSpacing: "0.22em",
    transition: { duration: 1, ease, delay: 0.1 },
  },
};

const subVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease, delay: 1.05 } },
};

const actionsVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 1.35 } },
};

const socialsVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.65, delay: 1.65 } },
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow hero-glow--yellow" />
      <div className="hero-glow hero-glow--teal" />

      <div className="container hero-center">

        <motion.span
          className="section-label"
          variants={labelVariant}
          initial="hidden"
          animate="visible"
        >
          Fashion · Lifestyle · Beauty
        </motion.span>

        <motion.h1
          className="hero-title"
          variants={titleContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={titleWord} className="hero-word">Hi,</motion.span>
          <motion.span variants={titleWord} className="hero-word">I'm</motion.span>
          <motion.span variants={titleWord} className="hero-word hero-title-accent">Roshni</motion.span>
          <motion.span variants={starVariant} className="hero-star">✦</motion.span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          variants={subVariant}
          initial="hidden"
          animate="visible"
        >
          <span className="hero-sub-tag hero-sub-tag--lime">Mom of two boys</span> ·{" "}
          <span className="hero-sub-tag hero-sub-tag--teal">Certified pastry chef</span> ·{" "}
          <span className="hero-sub-tag hero-sub-tag--purple">Fashionista</span> — making
          high fashion approachable, one saree at a time.
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={actionsVariant}
          initial="hidden"
          animate="visible"
        >
          <a href="#content" className="btn-accent">See My Content</a>
          <a href="#contact" className="btn-ghost">
            Work With Me <span className="btn-arrow">→</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          variants={socialsVariant}
          initial="hidden"
          animate="visible"
        >
          <a href="https://instagram.com/roshni878" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.threads.com/@roshni878" target="_blank" rel="noreferrer">Threads</a>
          <a href="https://facebook.com/roshni.joshy" target="_blank" rel="noreferrer">Facebook</a>
        </motion.div>

      </div>
    </section>
  );
}
