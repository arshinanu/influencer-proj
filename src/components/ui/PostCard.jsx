import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import "./PostCard.css";

export default function PostCard({ title, category, date, image, href }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [9, -9]), { stiffness: 420, damping: 38 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-9, 9]), { stiffness: 420, damping: 38 });

  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.13) 0%, transparent 54%)`
  );

  function onMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className="post-card"
      style={{ rotateX, rotateY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileTap={{ scale: 0.97 }}
    >
      {/* Moving glare layer */}
      <motion.div className="post-card-glare" style={{ background: glareBg }} />

      <div className="post-image">
        {image && (
          <img
            src={image}
            alt={title}
            className="post-img"
            loading="lazy"
            decoding="async"
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
        <a href={href} target="_blank" rel="noreferrer" className="post-link">
          View on Instagram →
        </a>
      </div>
    </motion.div>
  );
}
