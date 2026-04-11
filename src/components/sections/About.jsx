import "./About.css";
import roshni from "../../assets/roshni.jpg";

const facts = ["Mom of two boys", "Certified Pastry Chef", "Kerala Kaumudi Best Fashion Creator", "Fashionista"];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-image-wrap">
          <img src={roshni} alt="Roshni Vineeth" className="about-photo" />
        </div>
        <div className="about-text">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Behind the Feed</h2>
          <p>
            I'm Roshni — a fashion and lifestyle creator based in Kerala, India. A certified pastry chef
            turned content creator, I'm passionate about making high fashion feel approachable, especially
            through the timeless elegance of Indian ethnic wear.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Winner of the Kerala Kaumudi Best Fashion Creator on Instagram, I create content that blends
            style, culture, and real everyday life as a mom of two. No pretence — just genuine love for
            fashion and storytelling.
          </p>
          <div className="about-facts">
            {facts.map((f) => (
              <span key={f} className="about-fact-chip">{f}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
