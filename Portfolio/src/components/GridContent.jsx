import React from "react";
import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";

function GridContainer() {
  return (
    <>
      <section className="grid-text-content-container">
        <h2>
          <h2>
            Tailored Solutions <span>for a Digital Age</span>
          </h2>
        </h2>
        <div className="content-container">
          <div className="content-left">
            <div className="text-content">
              <p>
                <em>Hi there! My name is… Bruce Niyibitanga</em> <br />
                Yes, I know what you're thinking - 'Bruce what?! How do I even
                pronounce that?' Haha, let me help you. It's pronounced as 'Nee
                yee bee tounge ga' hopefully that helps 🙂. I'm the eldest of 7
                children (5 girls and 1 little brother). It's NEVER boring at
                home!
              </p>
              <p>
                I'm a Software Developer based in Miles, West QLD. I'm committed
                to delivering cutting-edge solutions with a personal touch. My
                approach combines modern techniques with time-tested expertise
                to provide services you can trust.
              </p>
            </div>
            <Link to="/about" className="btn">
              More about me <RiArrowRightLine />
            </Link>
          </div>
          <div className="content-right">
            <img src="/img/forest-xplore.jpg" alt="Profile image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default GridContainer;
