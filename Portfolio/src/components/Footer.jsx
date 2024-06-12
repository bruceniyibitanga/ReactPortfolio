import React, { useEffect } from "react";

function HandleBorderRadius(isDownScroll = true, currentTopRadii, footer) {
  if (isDownScroll) {
    let calculation = currentTopRadii - currentTopRadii * 0.03;
    footer.style.borderTopLeftRadius = `${
      currentTopRadii - currentTopRadii * 0.03
    }rem`;
    footer.style.borderTopRightRadius = `${
      currentTopRadii - currentTopRadii * 0.03
    }rem`;
    // console.log("Calculation: ", calculation);
  } else {
    footer.style.borderTopLeftRadius = `${
      currentTopRadii + currentTopRadii * 0.03
    }rem`;
    footer.style.borderTopRightRadius = `${
      currentTopRadii + currentTopRadii * 0.03
    }rem`;
  }
}

function Footer() {
  useEffect(() => {
    const footer = document.querySelector(".footer");
    let currentTopRadii;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentTopRadii = footer.style.borderTopRightRadius;
          console.log("Current Top Radii: ", currentTopRadii);
          currentTopRadii = parseInt(currentTopRadii.replace("rem", ""));

          window.addEventListener("scroll", () => {
            HandleBorderRadius(true, currentTopRadii, footer);
          });
        } else {
          window.addEventListener("scroll", () => {
            HandleBorderRadius(false, currentTopRadii, footer);
          });
        }
      });
    }, options);

    observer.observe(footer);
  }, []);
  return (
    <>
      <footer className="footer">
        <div className="footer-container wrapper">
          <div className="footer-content-container">
            <div className="footer-text">
              <h2>Let's create something great, together.</h2>
              <a href="mailto:hello@xenova.com.au">hello@xenova.com.au</a>
            </div>
            <form className="footer-form" action="#">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="footer-link-container">
            <a href="" className="footer-link">
              Home
            </a>
            <a href="" className="footer-link">
              About
            </a>
            <a href="" className="footer-link">
              Projects
            </a>
            <a href="" className="footer-link">
              Contact Us
            </a>
          </div>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
