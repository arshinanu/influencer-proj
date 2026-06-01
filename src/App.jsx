import Spline from "@splinetool/react-spline";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <div className="global-bg-spline">
        <Spline scene="https://prod.spline.design/bzHKMPXqvXFGreMp/scene.splinecode" />
      </div>
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
