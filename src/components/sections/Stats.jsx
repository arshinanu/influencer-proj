import StatCard from "../ui/StatCard";
import "./Stats.css";

const stats = [
  { label: "Instagram Followers", value: "135K" },
  { label: "Threads Followers", value: "42.6K" },
  { label: "Avg. Reel Views", value: "37K" },
  { label: "Total Posts", value: "2700+" },
];

export default function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="container">
        <div className="stats-header">
          <span className="section-label">By the Numbers</span>
          <h2 className="section-title">Audience & Reach</h2>
        </div>
        <div className="stats-grid">
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
