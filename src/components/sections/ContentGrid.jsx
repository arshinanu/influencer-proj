import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PostCard from "../ui/PostCard";
import { posts } from "../../data/posts";
import "./ContentGrid.css";

const categories = ["All", "Fashion", "Beauty", "Promotions"];
const trendingPosts = posts.slice(0, 3);

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0.15 };

const trendingCardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease, delay: i * 0.12 },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, ease, delay: (i % 4) * 0.09 },
  }),
  exit: { opacity: 0, scale: 0.93, y: -10, transition: { duration: 0.2 } },
};

export default function ContentGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* ── Trending bento ── */}
      <section className="trending" id="content">
        <div className="container trending-inner">

          <div className="trending-grid">
            {trendingPosts.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.href}
                className={`trending-card${i === 0 ? " trending-card--featured" : ""}`}
                target="_blank"
                rel="noreferrer"
                variants={trendingCardVariant}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                <img src={p.image} alt={p.title} />
                <span className="trending-card-cat">{p.category}</span>
                <div className="trending-card-shine" />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="trending-text"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            <span className="section-label">Popular Item</span>
            <h2 className="trending-title">Hot Trending On This Week.</h2>
            <p className="trending-desc">
              The freshest fashion and lifestyle content from Roshni — sarees, beauty moments,
              and everyday elegance. Updated every week.
            </p>
            <a href="#content-full" className="trending-see-all">
              See all <span>→</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* ── Full content grid ── */}
      <section className="content-full" id="content-full">
        <div className="container">

          <motion.div
            className="content-full-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, ease }}
          >
            <span className="section-label">Latest</span>
            <h2 className="section-title">My Content</h2>
          </motion.div>

          <motion.div
            className="content-filters"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
          >
            {categories.map((c) => (
              <button
                key={c}
                className={`filter-btn ${active === c ? "active" : ""}`}
                onClick={() => setActive(c)}
              >{c}</button>
            ))}
          </motion.div>

          <motion.div className="content-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  variants={cardVariant}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <PostCard {...p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </>
  );
}
