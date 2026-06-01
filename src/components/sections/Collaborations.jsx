import { motion } from "framer-motion";
import "./Collaborations.css";

const brands = ["Anayra Couture", "Fab India", "W for Women", "Jos Alukkas", "Jayalakshmi", "Horlicks", "Milky Bar"];

const testimonials = [
  { brand: "Anayra Couture", quote: "Roshni's authentic voice and elegant styling drove incredible engagement for our saree campaign. A true professional.", person: "Brand Manager" },
  { brand: "SheSight Magazine", quote: "A talented fashion content creator who effortlessly blends tradition with modern style. Truly inspiring.", person: "Editorial Team" },
];

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0.2 };

const brandContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const brandChip = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease } },
};

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const testimonialCard = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export default function Collaborations() {
  return (
    <section className="collabs" id="collabs">
      <div className="container">

        <motion.div
          className="collabs-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease }}
        >
          <span className="section-label">Partnerships</span>
          <h2 className="section-title">Brands I've Worked With</h2>
        </motion.div>

        <motion.div
          className="brand-grid"
          variants={brandContainer}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {brands.map((b) => (
            <motion.div key={b} className="brand-chip" variants={brandChip}>{b}</motion.div>
          ))}
        </motion.div>

        <motion.div
          className="testimonials"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {testimonials.map((t) => (
            <motion.div key={t.brand} className="testimonial-card" variants={testimonialCard}>
              <div className="testimonial-quote-mark">"</div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-footer">
                <div className="testimonial-line" />
                <p className="testimonial-meta">{t.person} · <span>{t.brand}</span></p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
