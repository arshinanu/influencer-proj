import { motion } from "framer-motion";
import "./ZeliaBrand.css";
import zeliaLogo from "../../assets/zelia_roshni_logo.jpg";

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0.25 };

const tagContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.88, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease } },
};

export default function ZeliaBrand() {
  return (
    <section className="zelia" id="shop">
      <div className="container zelia-inner">

        <motion.div
          className="zelia-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.8, ease }}
        >
          <span className="section-label">My Brand</span>
          <h2 className="section-title">Zélia Roshni</h2>
          <p className="zelia-desc">
            Zélia Roshni is my personal fashion label — born from a love of elegant Indian
            ethnic wear and a desire to make every woman feel confident and beautiful.
            From luxurious sarees to curated festive collections, each piece reflects my
            personal style and passion for timeless fashion.
          </p>
          <a
            href="https://www.instagram.com/zelia_roshni/"
            target="_blank"
            rel="noreferrer"
            className="zelia-btn"
          >
            Shop on Instagram ↗
          </a>
        </motion.div>

        <motion.div
          className="zelia-card"
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={vp}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
        >
          <div className="zelia-card-bg" />
          <motion.div
            className="zelia-logo-img-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
          >
            <img src={zeliaLogo} alt="Zélia Roshni" className="zelia-logo-img" />
          </motion.div>
          <motion.div
            className="zelia-tags"
            variants={tagContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <motion.span variants={tagItem}>Sarees</motion.span>
            <motion.span variants={tagItem}>Ethnic Wear</motion.span>
            <motion.span variants={tagItem}>Festive Collections</motion.span>
            <motion.span variants={tagItem}>Curated Fashion</motion.span>
          </motion.div>
          <motion.a
            href="https://www.instagram.com/zelia_roshni/"
            target="_blank"
            rel="noreferrer"
            className="zelia-ig"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 0.5, ease, delay: 0.4 }}
          >
            @zelia_roshni
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
