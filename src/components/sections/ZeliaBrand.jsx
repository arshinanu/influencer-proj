import "./ZeliaBrand.css";

export default function ZeliaBrand() {
  return (
    <section className="zelia" id="shop">
      <div className="container zelia-inner">
        <div className="zelia-text">
          <span className="section-label">My Brand</span>
          <h2 className="section-title">Zelia Roshni</h2>
          <p>
            Zelia Roshni is my personal fashion label — born from a love of elegant Indian
            ethnic wear and a desire to make every woman feel confident and beautiful.
            From luxurious sarees to curated festive collections, each piece reflects my
            personal style and passion for timeless fashion.
          </p>
          <a
            href="https://www.instagram.com/zelia_roshni/"
            target="_blank"
            rel="noreferrer"
            className="zelia-btn"
          >
            Shop on Instagram ↗
          </a>
        </div>
        <div className="zelia-card">
          <div className="zelia-logo-wrap">
            <span className="zelia-logo-text">Zelia Roshni</span>
            <span className="zelia-logo-sub">by Roshni Vineeth</span>
          </div>
          <div className="zelia-tags">
            <span>Sarees</span>
            <span>Ethnic Wear</span>
            <span>Festive Collections</span>
            <span>Curated Fashion</span>
          </div>
          <a
            href="https://www.instagram.com/zelia_roshni/"
            target="_blank"
            rel="noreferrer"
            className="zelia-ig"
          >
            @zelia_roshni
          </a>
        </div>
      </div>
    </section>
  );
}
