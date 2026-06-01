import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PostCard from "../ui/PostCard";
import { posts } from "../../data/posts";
import "./ContentGrid.css";

const categories = ["All", "Fashion", "Beauty", "Promotions"];
const trendingPosts = posts.slice(0, 4);

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0.2 };

const cardVariant = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } },
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.22 } },
};

export default function ContentGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <section className="trending" id="content">
        <div className="container trending-inner">

          <motion.div
            className="trending-grid"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease }}
          >
            {trendingPosts.map((p) => (
              <a key={p.id} href={p.href} className="trending-card" target="_blank" rel="noreferrer">
                <img src={p.image} alt={p.title} />
                <span className="trending-card-cat">{p.category}</span>
              </a>
            ))}
          </motion.div>

          <motion.div
            className="trending-text"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
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
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  variants={cardVariant}
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
