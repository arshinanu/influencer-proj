import { motion } from "framer-motion";
import "./About.css";
import rosh15 from "../../assets/rosh15.jpeg";

const facts = ["Mom of two boys", "Certified Pastry Chef", "Kerala Kaumudi Best Fashion Creator", "Fashionista"];
const factAccents = ["lime", "teal", "purple", "lime"];

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0.25 };

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease, delay: 0.1 } },
};

const chipContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const chip = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease } },
};

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">

        <motion.div
          className="about-image-wrap"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="about-image-accent" />
          <img
            src={rosh15}
            alt="Roshni Vineeth"
            className="about-photo"
            loading="lazy"
            decoding="async"
          />
          <div className="about-image-badge">
            <span className="about-badge-number">№ 1</span>
            <span className="about-badge-text">Kerala Fashion Creator</span>
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Behind the Feed</h2>
          <p className="about-desc">
            I'm Roshni — a fashion and lifestyle creator based in Kerala, India. A certified pastry chef
            turned content creator, I'm passionate about making high fashion feel approachable, especially
            through the timeless elegance of Indian ethnic wear.
          </p>
          <p className="about-desc">
            Winner of the Kerala Kaumudi Best Fashion Creator on Instagram, I create content that blends
            style, culture, and real everyday life as a mom of two. No pretence — just genuine love for
            fashion and storytelling.
          </p>
          <motion.div
            className="about-facts"
            variants={chipContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {facts.map((f, i) => (
              <motion.span
                key={f}
                className={`about-chip about-chip--${factAccents[i % factAccents.length]}`}
                variants={chip}
              >
                {f}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
