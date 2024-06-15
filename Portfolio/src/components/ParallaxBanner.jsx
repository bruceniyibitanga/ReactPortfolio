import { React, useEffect } from "react";
import { motion } from "framer-motion";
import CompanyVideo from "../assets/videos/companyvideo.mp4";

function FullPageCalloutBanner() {
  useEffect(() => {
    const videoSection = document.getElementsByClassName(
      "full-page-callout-banner"
    )[0];

    const video = document.getElementsByClassName("parallax-video-container")[0]
      .firstChild;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // video.play();
        }
      });
    }, options);

    observer.observe(videoSection);
  }, []);
  return (
    <div>
      <section className="full-page-callout-banner">
        <motion.div
          onScroll={{ scale: [1, 2, 3, 1] }}
          className="parallax-video-container"
        >
          <video autoPlay loop muted>
            <source src={CompanyVideo} />
          </video>
        </motion.div>
        <div className="parallax-main-content">
          <div className="container">
            <div className="text">
              <h3>What sets us apart</h3>
              <p>
                We don't just build websites;{" "}
                <span>
                  we create digital legacies that stand the test of time.
                </span>{" "}
                Our approach is meticulous, our execution flawless, and our
                commitment to your success unwavering.
              </p>
            </div>
            <div className="text">
              <h3>Our mission</h3>
              <p>
                With us, we{" "}
                <span>transform your ideas into digital experiences</span> that
                resonate, and engages your audience with every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FullPageCalloutBanner;
