import { motion } from "framer-motion";
import "./Stats.css";
import roshni5 from "../../assets/roshni5.jpg";
import roshni6 from "../../assets/roshni6.jpg";
import roshni7 from "../../assets/roshni7.jpg";
import roshni8 from "../../assets/roshni8.jpg";

const stats = [
  { label: "Followers", value: "145K+", accent: "lime" },
  { label: "Avg. Reel Views", value: "50K+", accent: "teal" },
  { label: "Total Posts", value: "2800+", accent: "purple" },
];

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0.4 };

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const statItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export default function Stats() {
  return (
    <section className="stats-bar" id="stats">
      <div className="container stats-bar-inner">

        <motion.div
          className="stats-numbers"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {stats.map((s) => (
            <motion.div key={s.label} className={`stat-item stat-item--${s.accent}`} variants={statItem}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="stats-community"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease, delay: 0.3 }}
        >
          <div className="stats-avatars">
            <img src={roshni5} alt="" className="stats-avatar" loading="lazy" decoding="async" />
            <img src={roshni6} alt="" className="stats-avatar" loading="lazy" decoding="async" />
            <img src={roshni7} alt="" className="stats-avatar" loading="lazy" decoding="async" />
            <img src={roshni8} alt="" className="stats-avatar" loading="lazy" decoding="async" />
          </div>
          <div className="stats-community-text">
            <span className="stats-community-label">Community</span>
            <span className="stats-community-value">145K+ <span>engaged fans</span></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
