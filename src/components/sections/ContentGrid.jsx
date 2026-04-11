import { useState } from "react";
import PostCard from "../ui/PostCard";
import { posts } from "../../data/posts";
import "./ContentGrid.css";

const categories = ["All", "Fashion", "Beauty", "Promotions"];

export default function ContentGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="content" id="content">
      <div className="container">
        <div className="content-header">
          <span className="section-label">Latest</span>
          <h2 className="section-title">My Content</h2>
        </div>
        <div className="content-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >{c}</button>
          ))}
        </div>
        <div className="content-grid">
          {filtered.map((p) => <PostCard key={p.id} {...p} />)}
        </div>
      </div>
    </section>
  );
}
