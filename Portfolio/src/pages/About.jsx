import React from "react";

import SectionHeaders from "../components/SectionHeaders";
import ExperienceTiles from "../components/ExperienceTiles";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <SectionHeaders
        section="About me"
        subheading="What am I good at"
        paragraph="Hi👋 there, friend! My name is Bruce, a front-end developer based in Brisbane Australia. This is a summary of my skills:"
      />
      <section className="about-section-wrapper">
        <div className="text-information-section-container">
          <div className="left-content-sticky">
            <p>
              Born in the refugee camps of
              <span className="highlight">Tanzania, Africa</span> life was
              difficult. However, through it all God sustained and protected us.
              Life was uncertain, food and water scarce and all that I dreamed
              about about as a child was a place that I could call home. A home
              free for worry, hunger and pain...
            </p>
          </div>
          <div className="right-content-scroll">
            <p>
              Hi my name is Bruce Niyibitanga - yes I know what you're thinking
              - 'Bruce what?!, how do you even pronounce that?' Haha It's
              actually pronounced as 'Nee yee bee tounge ga' hopefully that
              helps 🙂. I'm the eldest of 7 children (5 girls and 1 little
              brother). Coming to Australia in 2005 was an amazing opportunity
              for a new life and new beginnings. Among the many opportunities
              that Australia offered, education and an ability to freely express
              myself without fear of reprisal were some of its greatest gifts.
            </p>
            <img src="/img/profile.webp" alt="" />
            <p>
              So fast forward to today, I work as a christian missionary with an
              amazing passion for photography and videography and software
              development. I love to capture amazing memories that are worth
              remembering. It's soo rewarding to see when someone can look at
              themselves and truly feel and look beautiful.
            </p>
            <p>
              It was this passion for photo, video and web development that
              started Xenova. Based in the Western Downs (West Queensland) we
              pride ourselves in capturing amazing, candid, true to life photos
              to share with generations to come. We also offer web development
            </p>
          </div>
        </div>
        <div className="quote-section">
          <q className="quote">
            Web design is more than creating a site; it's about{" "}
            <span className="highlight">
              weaving a digital tapestry where every pixel tells a story
            </span>
            , and every interface invites a journey. It's our craft to frame
            your vision, capturing the essence of your brand with the artistry
            of code.
          </q>
          <div className="quote-reference">
            <p>Bruce Niyibitanga</p>
            <p>Found of Xenova Creative Studios</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
