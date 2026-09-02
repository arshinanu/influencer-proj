import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import "./styles/global.css";

const Spline = lazy(() => import("@splinetool/react-spline"));

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

export default function App() {
  // The Spline scene is a full-screen WebGL background rendered behind the
  // entire site. On phones its continuous render loop is the single biggest
  // source of scroll jank/battery drain, so it's skipped there entirely
  // (also avoids downloading the heavy @splinetool runtime on mobile).
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && (
        <div className="global-bg-spline">
          <Suspense fallback={null}>
            <Spline scene="https://prod.spline.design/bzHKMPXqvXFGreMp/scene.splinecode" />
          </Suspense>
        </div>
      )}
      <div className="app-content">
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}
