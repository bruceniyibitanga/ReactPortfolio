import { Element } from "react-scroll";
import ReactLenis from "lenis/react";

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

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";
import GridContent from "./components/GridContent";
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
  { url: image2, alt: "Image of Bruce hiking in the mountains" },
  { url: image3, alt: "Image of Bruce in a tree with a friend" },
  { url: image4, alt: "Image of Bruce in road taking a photo" },
];

// VIDEO IMPORTS
import GauteauxVideo from "./assets/videos/gateaux.mp4";
import SamsWarehouseVideo from "./assets/videos/sams-warehouse.mp4";
import About from "./pages/About";
import GridContainer from "./components/GridContent";
import { useEffect } from "react";

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
  useEffect(() => {
    const aboutSection = document.getElementsByClassName(
      "grid-text-content-container"
    );
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // if (entry.isIntersecting) {
        //   console.log("Intersecting");
        //   document.body.style.backgroundColor = "#FCF3F0";
        // } else {
        //   document.body.style.backgroundColor = "#FCF7EF";
        // }
      });
    }, options);

    // observer.observe(aboutSection[0]);
  }, []);
  return (
    <>
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
    </>
  );
}

export default App;
