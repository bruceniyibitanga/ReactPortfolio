import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container wrapper">
          <div className="footer-content-container">
            <p className="footer-text">
              Let's create something great, together.
            </p>
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
