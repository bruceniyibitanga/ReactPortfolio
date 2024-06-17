import React, { useEffect } from "react";
import { Link } from "react-scroll";

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
        <div className="footer-container">
          <div className="footer-content-container">
            <div className="footer-text">
              <h2>Let's create something great, together.</h2>
              <a href="mailto:hello@xenova.com.au">hello@xenova.com.au</a>
            </div>
            <form className="footer-form" name="contact" netlify>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="footer-link-container">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={600}
              offset={-70}
            >
              Home
            </Link>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={600}
              offset={-20}
            >
              About
            </Link>
            <Link
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={600}
              offset={-20}
            >
              Projects
            </Link>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={800}
              offset={-20}
            >
              Contact
            </Link>
          </div>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
