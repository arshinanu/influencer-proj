import "./Collaborations.css";

const brands = ["Anayra Couture", "Fab India", "W for Women", "Jos Alukkas", "Jayalakshmi", "Horlicks","Milky Bar"];

const testimonials = [
  { brand: "Anayra Couture", quote: "Roshni's authentic voice and elegant styling drove incredible engagement for our saree campaign. A true professional.", person: "Brand Manager" },
  { brand: "SheSight Magazine", quote: "A talented fashion content creator who effortlessly blends tradition with modern style. Truly inspiring.", person: "Editorial Team" },
];

export default function Collaborations() {
  return (
    <section className="collabs" id="collabs">
      <div className="container">
        <div className="collabs-header">
          <span className="section-label">Partnerships</span>
          <h2 className="section-title">Brands I've Worked With</h2>
        </div>
        <div className="brand-grid">
          {brands.map((b) => (
            <div key={b} className="brand-chip">{b}</div>
          ))}
        </div>
        <div className="testimonials">
          {testimonials.map((t) => (
            <div key={t.brand} className="testimonial-card">
              <p className="testimonial-quote">"{t.quote}"</p>
              <p className="testimonial-meta">{t.person} · {t.brand}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
