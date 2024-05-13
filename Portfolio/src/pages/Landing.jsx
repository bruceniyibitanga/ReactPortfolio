import React, { useState } from "react";
import Button from "../components/Button";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";

function Landing(images) {
  const [imageIndex, setImageIndex] = useState(0);

  function nextImage() {
    if (imageIndex === images.images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  setTimeout(nextImage, 3000);

  return (
    <>
      <div className="landing-container image-container">
        <div className="image-container">
          <img src={images.images[0].url} />
        </div>
        <div className="landing-content-container">
          <div className="text-container">
            <h1>
              Hello, I'm Bruce, a passionate software developer and engineer.
            </h1>
            <p>
              I care a lot about using design for positive impact. and enjoy
              creating user-centric, delightful, and human experiences.
            </p>
          </div>
          <div className="btn-container">
            <Button text="Contact me" />
            <div className="social-media-btn-container">
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
            </div>
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
    </>
  );
}

export default Landing;
