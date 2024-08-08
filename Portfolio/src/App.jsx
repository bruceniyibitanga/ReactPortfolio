import { useState, useEffect, Suspense } from "react";
import { Element } from "react-scroll";
import ReactLenis from "lenis/react";
import { Helmet } from "react-helmet-async";

import "./Styles/loadingscreen.scss";
import "./Styles/globals.scss";
import "./Styles/clash-display.scss";
import "./Styles/navbar.scss";
import "./Styles/landing.scss";
import "./Styles/sectionheaders.scss";
import "./Styles/experiencetiles.scss";
import "./Styles/about.scss";
import "./Styles/project.scss";
import "./Styles/contactform.scss";
import "./Styles/footer.scss";
import "./Styles/bentogrid.scss";
import "./Styles/gridcontent.scss";
import "./Styles/parallaxbanner.scss";
import "./Styles/quote.scss";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";
import FullPageCalloutBanner from "./components/ParallaxBanner";
// LANDING PAGE SLIDE SHOW IMAGES
const image1 = "/img/profile.webp";
const image2 = "/img/wilson-prom2.webp";
const image3 = "/img/garden.webp";
const image4 = "/img/photograph.webp";

let images = [
  {
    url: image1,
    alt: "Image of Bruce sitting on an orange chair in a green forest",
  },
];

const gridItems = [
  {
    showLabel: true,
    label: "NDIS Provider Website",
    logo: "/img/ndis-logo.webp",
    src: "/img/dcc-hero.jpg",
    alt: "Image of a support worker with elderly client",
    website: "https://dedicatedcommunitycare.com.au/",
  },
  {
    showLabel: true,
    label: "Botani",
    src: "/img/botani-landing.jpg",
    alt: "Image of Plant",
    website: "https://botani.netlify.app/",
    isVideo: false,
  },
  {
    showLabel: true,
    label: "Sams Warehouse",
    src: "/img/wilson-prom2.webp",
    alt: "Image of little boy holding vegetables",
    website: "https://sams-warehouse.netlify.app/",
    isVideo: false,
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.classList.add("locked");
    window.addEventListener("load", () => {
      setLoading(false);
    });

    return () => {
      document.body.classList.remove("locked");
    };
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>
          Brruce Niyibitanga: Software Developer from Brisbane & West QLD
        </title>
        <meta
          name="description"
          content="Software Developer from West Queensland & Brisbane"
        />
      </Helmet> */}
      <Suspense fallback={<LoadingScreen />}>
        <ReactLenis root>
          <Navbar />

          <Element name="home">
            <Home images={images} />
          </Element>
          <Element name="about">
            <About />
          </Element>

          <FullPageCalloutBanner />

          <Element name="projects">
            <BentoGrid x={2} y={2} gridItems={gridItems} />
          </Element>

          <Element name="contact">
            <Footer />
          </Element>
        </ReactLenis>
      </Suspense>
    </>
  );
}

export default App;
