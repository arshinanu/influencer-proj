import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Stats from "../components/sections/Stats";
import ContentGrid from "../components/sections/ContentGrid";
import ZeliaBrand from "../components/sections/ZeliaBrand";
import Collaborations from "../components/sections/Collaborations";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <ContentGrid />
      <ZeliaBrand />
      <Collaborations />
      <Contact />
    </>
  );
}
