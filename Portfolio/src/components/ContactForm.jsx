import React from "react";

function ContactForm() {
  return (
    <>
      <section className="contact-section">
        <div className="wrapper">
          {/* Colored circles behind project cards */}
          <div className="colored-circles-container">
            <div className="colored-circle blue-circle"></div>
            <div className="colored-circle red-circle"></div>
            <div className="colored-circle yellow-circle"></div>
          </div>

          <div className="contact-form-container">
            <div className="form-container">
              <div className="form-text-container">
                <h3>Contact Us</h3>
                <p>Let's get in touch.</p>
              </div>
              <div className="form-container">
                <form action="#">
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
            </div>
            {/* <div className="form-image-container">
            <img
              src="/img/artwork.png"
              alt="artwork image"
              className="form-img"
            />
            <div className="text-container">
              <p>Let's create art one line of code at a time</p>
            </div>
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
