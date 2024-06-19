import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";

function Home(images) {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    function nextImage() {
      if (imageIndex === images.images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }

    setTimeout(nextImage, 3000);
  }, []);

  return (
    <div className="landing-container image-container">
      <div className="image-container">
        <img src={images.images[0].url} />
      </div>
      <div className="landing-content-container">
        <div className="text-container">
          <h1>
            Greetings from West QLD — I'm Bruce, Your Dedicated Freelance
            Software Developer
          </h1>
          <p>
            With a passion for design that drives social good, I'm dedicated to
            creating software experiences that are not only user-friendly but
            also enrich lives and empower individuals.
          </p>
        </div>
        <div className="btn-container">
          <Button text="You're hired! 😎" />
          {/* <div className="social-media-btn-container">
            <div className="instagram-container social-icon-container">
              <img
                className="social-icon"
                src={Instagram}
                alt="Instagram social icon"
              />
            </div>

            <div className="linkedin-container social-icon-container">
              <img
                className="social-icon"
                src={Linkedin}
                alt="Linkedin social icon"
              />
            </div>

            <div className="twitter-container social-icon-container">
              <img
                className="social-icon"
                src={Twitter}
                alt="Twitter social icon"
              />
            </div>
          </div> */}
        </div>
      </div>
      {/* Colored circle background highlighting */}
      <div className="color-bg-container">
        <div className="yellow"></div>
        <div className="light-blue"></div>
      </div>
      <div className="scroll-animation-container">
        <div className="mouse"></div>
      </div>
    </div>
  );
}

export default Home;
