import { useState } from "react";
import "./PostCard.css";

export default function PostCard({ title, category, date, image, href }) {
  const [clicked, setClicked] = useState(false);

  function handleImageClick() {
    setClicked(true);
  }

  function handleAnimationEnd() {
    setClicked(false);
  }

  return (
    <div className="post-card">
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
      </div>
      <div className="post-body">
        <p className="post-date">{date}</p>
        <h3 className="post-title">{title}</h3>
        <a href={href} target="_blank" rel="noreferrer" className="post-link">Read more →</a>
      </div>
    </div>
  );
}
