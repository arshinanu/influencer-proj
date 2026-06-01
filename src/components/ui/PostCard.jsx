import { useState } from "react";
import { motion } from "framer-motion";
import "./PostCard.css";

const ease = [0.22, 1, 0.36, 1];

export default function PostCard({ title, category, date, image, href }) {
  const [clicked, setClicked] = useState(false);

  function handleImageClick() {
    setClicked(true);
  }

  function handleAnimationEnd() {
    setClicked(false);
  }

  return (
    <motion.div
      className="post-card"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease }}
    >
      <div className="post-image">
        {image && (
          <img
            src={image}
            alt={title}
            className={`post-img${clicked ? " post-img--clicked" : ""}`}
            onClick={handleImageClick}
            onAnimationEnd={handleAnimationEnd}
          />
        )}
        <span className="post-category">{category}</span>
        <div className="post-image-overlay">
          <a href={href} target="_blank" rel="noreferrer" className="post-overlay-link">
            View Post →
          </a>
        </div>
      </div>
      <div className="post-body">
        <p className="post-date">{date}</p>
        <h3 className="post-title">{title}</h3>
        <a href={href} target="_blank" rel="noreferrer" className="post-link">View on Instagram →</a>
      </div>
    </motion.div>
  );
}
