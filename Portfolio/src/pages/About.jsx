import { React, useEffect } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import { RiArrowDownWideLine } from "@remixicon/react";

// COMPONENT IMPORTS
import Quote from "../components/Quote";

//ASSET IMPORTS
import Profile from "../assets/profile.jpg";
import GitegaVillage from "../assets/videos/gitega-village.mp4";
import GitegaVillageImage from "../assets/images/gitega-village.jpeg";

function About() {
  function HandleAccordianButtonClick(e) {
    let btn = e.target;
    let accordianContent = e.target.nextSibling;
    btn.classList.toggle("active");
    accordianContent.classList.toggle("active");
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
  }, []);
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
            <video src={GitegaVillage} autoPlay muted loop />
            <div className="parallax-wrapper">
              <Parallax bgImage={GitegaVillageImage} />
            </div>
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
              cause to uplift and empower communities in need.
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
                <button
                  className="accordian-btn"
                  onClick={HandleAccordianButtonClick}
                >
                  <RiArrowDownWideLine /> <span>Our Commitment</span>
                </button>
                <div className="accordian-content">
                  <p>
                    At Xenova, we're dedicated to crafting a website that
                    reflects the highest standards of professionalism. We'll
                    work diligently to ensure the final product is not just
                    professional, but a benchmark of quality in the digital
                    space.
                  </p>
                </div>
                <button
                  className="accordian-btn"
                  onClick={HandleAccordianButtonClick}
                >
                  <RiArrowDownWideLine /> <span>Our Promise</span>
                </button>
                <div className="accordian-content" style={{}}>
                  <p>
                    We promise to craft a website that stands out for its visual
                    elegance, user-friendliness, and robust functionality. We
                    strive to ensure your site is responsive, accessible, and
                    optimized for search engines, aiming to create an online
                    presence that supports your business's growth and success.
                  </p>
                </div>
              </div>
              <div className="cta">
                <p>
                  If you're ready just press the button down below and we'll
                  start creating!
                </p>
                <Link className="cta-btn btn" to="contact" duration={600}>
                  Let's get started! 🎉
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
