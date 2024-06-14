import { React, useEffect, useState, useRef } from "react";

import SectionHeaders from "../components/SectionHeaders";
import ExperienceTiles from "../components/ExperienceTiles";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { RiAddFill, RiCrossLine } from "@remixicon/react";

import Beach from "../assets/young-beach.jpg";
import Profile from "../assets/profile.jpg";
import { Parallax } from "react-parallax";
import Quote from "../components/Quote";
import { Link } from "react-scroll";

function About() {
  const [accordian, setAccordian] = useState(false);
  const [accordian2, setAccordian2] = useState(false);
  const accordianRef1 = useRef(null);
  const accordianRef2 = useRef(null);

  function HandleAccordianButtonClick(accordianRef) {
    accordianRef = accordianRef.current;
    let accordianContent =
      accordianRef.getElementsByClassName("accordian-content")[0];

    if (accordianRef === accordianRef1.current) {
      if (accordian === false) {
        accordianContent.style.display = "block";
        setAccordian(true);
      } else {
        accordianContent.style.display = "none";
        setAccordian(false);
      }
    } else if (accordianRef === accordianRef2.current) {
      if (accordian2 === false) {
        accordianContent.style.display = "block";
        setAccordian2(true);
      } else {
        accordianContent.style.display = "none";
        setAccordian2(false);
      }
    }
  }

  useEffect(() => {
    const quoteSection = document.getElementsByClassName("quote-section")[0];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#D8E7EE";
        } else {
          document.body.style.backgroundColor = "#FCF7EF";
        }
      });
    }, options);
    observer.observe(quoteSection);

    return () => {
      observer.unobserve(quoteSection);
      document.body.style.backgroundColor = "#FCF7EF";
    };
  }, [accordian]);
  return (
    <>
      <section className="about-section-wrapper">
        <div className="about-landing-section">
          <h2>Digital Excellence from Resilient Roots </h2>
        </div>
        <div className="text-information-section-container">
          <div className="left-content-sticky">
            <p>
              My journey began in the refugee camps of Tanzania, where life's
              essentials were a luxury and dreams were the only sanctuary.
              Amidst the uncertainty, there was a constant—faith. It was this
              faith that carried us through, a testament to resilience and hope.
            </p>
            <div className="parallax-wrapper">
              <Parallax bgImage="/img/forest-xplore.jpg" />
            </div>
          </div>
          <div className="right-content-scroll">
            <p>
              Hi my name is Bruce Niyibitanga - yes I know what you're thinking
              - 'Bruce what?!, how do you even pronounce that?' Haha It's
              actually pronounced as 'Nee yee bee tounge ga' hopefully that
              helps 🙂. I'm the founder of Xenova. My journey to founding Xenova
              is deeply intertwined with my own life experiences. Born into the
              hardships of a Tanzanian refugee, I learned early on the value of
              resilience, community, and hope. It was there, amid scarcity and
              uncertainty, that I discovered the profound impact of support and
              the difference it can make in a person's life.
            </p>
            <img src={Profile} alt="" />
            <p>
              These lessons have been the bedrock upon which Xenova was built.
              As a web development business, we're not just coding sites; we're
              crafting platforms that empower and uplift. Our mission extends
              beyond the digital realm — we're committed to giving back, to
              being a force for good in the communities that need it most.
            </p>
            <p>
              Every project at Xenova is infused with this spirit of generosity.
              We believe in the power of technology to create opportunities, to
              bridge divides, and to foster a sense of belonging.
            </p>
            <p>
              We delve into the heart of your mission, bringing to life a
              digital platform that's not just a site, but a destination. A
              place where every click reveals a story, every interface connects,
              and every user experience becomes a cherished interaction. With
              Xenova, your digital presence is an extension of your
              vision—crafted with care, designed with purpose, and built to
              last. By choosing Xenova, our clients are not only investing in
              their own digital future but are also contributing to a larger
            </p>
          </div>
        </div>

        <Quote
          quote={`Web design is more than creating a site; it's about weaving a digital tapestry where every pixel tells a story, and every interface invites a journey. It's our craft to frame your vision, capturing the essence of your brand with the artistry of code.`}
          reference="Bruce Niyibitanga"
          title="Founder, Xenova Digital"
        />

        <div className="expectation-section">
          <div className="left-expectation-content">
            <div className="image-container">
              <img src="/img/botani-mega-iphone.png" alt="" />
            </div>
          </div>
          <div className="right-expectation-content">
            <div className="text-content">
              <h3>What to expect</h3>
              <p>
                As we embark on the journey to develop your website, our first
                step is a deep dive into your vision. Understanding your needs
                is paramount—what functionalities are essential for your
                operations? How does your brand's personality shine through?
                These insights are the compass that will guide our design and
                development process.
              </p>
              <p>
                Expect a partnership where your input is valued every step of
                the way. Together, we'll craft a website that's not just a
                digital space, but a true extension of your brand. It will be a
                platform that authentically represents your unique identity and
                engages your audience on a deeper level.
              </p>
              <div className="accordian-container">
                <div
                  ref={accordianRef1}
                  className="accordian"
                  onClick={HandleAccordianButtonClick.bind(this, accordianRef1)}
                >
                  <div className="accordian-btn">
                    <RiAddFill /> <span>Our Commitment</span>
                  </div>
                  <div className="accordian-content">
                    <p>
                      At Xenova, we're dedicated to crafting a website that
                      reflects the highest standards of professionalism. We'll
                      work diligently to ensure the final product is not just
                      professional, but a benchmark of quality in the digital
                      space.
                    </p>
                  </div>
                </div>
                <div
                  ref={accordianRef2}
                  className="accordian"
                  onClick={HandleAccordianButtonClick.bind(this, accordianRef2)}
                >
                  <div className="accordian-btn">
                    <RiAddFill /> <span>Our Promise</span>
                  </div>
                  <div className="accordian-content" style={{}}>
                    <p>
                      Craft a website that stands out for its visual elegance,
                      user-friendliness, and robust functionality. We strive to
                      ensure your site is responsive, accessible, and optimized
                      for search engines, aiming to create an online presence
                      that supports your business's growth and success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cta">
                <p>
                  If you're ready just press the button down below 👇🏾 and we'll
                  start capturing amazing moments.
                </p>
                <Link className="cta-btn btn" to="contact" duration={600}>
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="experience-table-section">
          <div>
            <p>
              30+ <span>projects completed</span>
            </p>
          </div>

          <div>
            <p>
              30+ <span>happy clients</span>
            </p>
          </div>

          <div>
            <p>
              4+ <span>years experience</span>
            </p>
          </div>
        </div> */}
      </section>

      {/* <ContactForm /> */}
      {/* <Foot er /> */}
    </>
  );
}

export default About;
