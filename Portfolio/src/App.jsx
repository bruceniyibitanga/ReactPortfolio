import { useState, useEffect, Suspense, lazy } from "react";
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
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Footer = lazy(() => import("./components/Footer"));
const BentoGrid = lazy(() => import("./components/BentoGrid"));
const FullPageCalloutBanner = lazy(() => import("./components/ParallaxBanner"));
// LANDING PAGE SLIDE SHOW IMAGES
const landingImage1 = "/img/profile.webp";
const landingImage2 = "/img/forest-xplore.jpg";

let images = [
  {
    url: landingImage1,
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
      <ReactLenis root>
        <Suspense fallback={<LoadingScreen />}>
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
        </Suspense>
      </ReactLenis>
    </>
  );
}

export default App;
