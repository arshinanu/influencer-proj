import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import heroVideo from "../../assets/IMG_5915.mp4";
import "./HeroScroll.css";

const overlays = [
  {
    from: 0,
    to: 0.27,
    label: "Fashion · Lifestyle · Beauty",
    heading: "Where Tradition\nMeets Style",
  },
  {
    from: 0.27,
    to: 0.54,
    label: "145+ Followers · 50K+ Avg. Reel Views",
    heading: "A Creator\nYou Can Trust",
  },
  {
    from: 0.54,
    to: 0.81,
    label: "Kerala Kaumudi Best Fashion Creator",
    heading: "Award-Winning\nContent",
  },
  {
    from: 0.81,
    to: 1.0,
    label: "Partnerships · Collaborations · Campaigns",
    heading: "Let's Work\nTogether",
  },
];

function drawCover(ctx, video, cw, ch) {
  const vw = video.videoWidth;
  const vh = video.videoHeight;
  if (!vw || !vh) return;
  const ratio = Math.max(cw / vw, ch / vh);
  const dw = vw * ratio;
  const dh = vh * ratio;
  ctx.drawImage(video, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
}

function TextOverlay({ label, heading, scrollProgress, from, to }) {
  const fadeIn  = from + 0.06;
  const fadeOut = to   - 0.06;

  const opacity = useTransform(scrollProgress, [from, fadeIn, fadeOut, to], [0, 1, 1, 0]);
  const y       = useTransform(scrollProgress, [from, fadeIn], [28, 0]);

  return (
    <motion.div className="hs-text-block" style={{ opacity, y }}>
      <span className="hs-label">{label}</span>
      <h2 className="hs-heading">{heading}</h2>
    </motion.div>
  );
}

export default function HeroScroll() {
  const sectionRef = useRef(null);
  const canvasRef  = useRef(null);
  const videoRef   = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef });

  /* Seek video as user scrolls */
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    if (video && video.duration && isFinite(video.duration)) {
      video.currentTime = Math.max(
        0,
        Math.min(video.duration, progress * video.duration)
      );
    }
  });

  /* Canvas setup + resize handling */
  useEffect(() => {
    const video  = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      if (video.readyState >= 2) drawCover(ctx, video, canvas.width, canvas.height);
    };

    const onLoaded = () => {
      resize();
      video.currentTime = 0;
    };

    const onSeeked = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCover(ctx, video, canvas.width, canvas.height);
    };

    resize();
    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("seeked",     onSeeked);
    window.addEventListener("resize",    resize);

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("seeked",     onSeeked);
      window.removeEventListener("resize",    resize);
    };
  }, []);

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const hintOpacity   = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section ref={sectionRef} className="hs-section">
      <div className="hs-sticky">

        {/* Hidden video — source for frame extraction */}
        <video
          ref={videoRef}
          src={heroVideo}
          preload="auto"
          muted
          playsInline
          style={{ display: "none" }}
        />

        {/* Canvas renders current frame */}
        <canvas ref={canvasRef} className="hs-canvas" />

        {/* Atmosphere gradients */}
        <div className="hs-grad hs-grad--top" />
        <div className="hs-grad hs-grad--bottom" />

        {/* Scroll-driven text overlays */}
        <div className="hs-overlays">
          {overlays.map((o) => (
            <TextOverlay
              key={o.heading}
              {...o}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Progress indicator */}
        <div className="hs-progress-track">
          <motion.div
            className="hs-progress-fill"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Scroll hint — fades away after 8% scroll */}
        <motion.div className="hs-hint" style={{ opacity: hintOpacity }}>
          <span className="hs-hint-text">Scroll</span>
          <div className="hs-hint-line" />
        </motion.div>

      </div>
    </section>
  );
}
