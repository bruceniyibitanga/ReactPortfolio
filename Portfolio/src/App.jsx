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
import "./Styles/modal.scss";
import "./Styles/bentogrid.scss";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";

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

const gridItems = [
  {
    showLabel: true,
    label: "NDIS Provider Website",
    src: "/img/ndis.jpeg",
    alt: "Image of a support worker with elderly client",
  },
  {
    showLabel: true,
    label: "Botani",
    src: "/img/botani-landing.jpg",
    alt: "Image of Plant",
    isVideo: false,
  },
  {
    showLabel: true,
    label: "Sams Warehouse",
    src: "/img/wilson-prom2.webp",
    alt: "Image of little boy holding vegetables",
    isVideo: false,
  },
  {
    showLabel: true,
    label: "Sams Warehouse",
    src: "/img/garden.webp",
    alt: "Image of little boy holding vegetables",
    isVideo: false,
  },
];

function App() {
  return (
    <>
      <ReactLenis root>
        <Navbar />
        <Home images={images} />

        <BentoGrid x={2} y={2} gridItems={gridItems} />

        <Element name="contact">
          <ContactForm />
        </Element>

        {/* {createPortal(<Modal />, document.body)} */}

        <Element name="footer">
          <Footer />
        </Element>
      </ReactLenis>
    </>
  );
}

export default App;
