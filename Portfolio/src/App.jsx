
import './Styles/globals.scss'
import "./Styles/clash-display.scss";
import "./Styles/navbar.scss";
import "./Styles/landing.scss";
import "./Styles/sectionheaders.scss";
import "./Styles/experiencetiles.scss";
import "./Styles/about.scss";
import "./Styles/projects.scss";
import "./Styles/contactform.scss";
import "./Styles/footer.scss";

import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

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

function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Landing images={images} />
      </Element>

      {/* <Element name="about">
        <About />
      </Element> */}

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <ContactForm />
      </Element>

      {/* <Footer /> */}
      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
}

export default App
