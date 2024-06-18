import { React, useRef, useState, useEffect } from "react";
import SectionHeaders from "../components/SectionHeaders";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { RiArrowRightLine } from "@remixicon/react";

function BentoGrid({
  isCallOut = false,
  gridItems = [
    { isVideo: false, showLabel: false, label: "", src: "", alt: "" },
  ],
  removeLinkWrapper = false,
}) {
  // Calculate the total number of divs needed
  const totalDivs = gridItems.length;

  // Generate the items array
  const items = Array.from({ length: totalDivs }, (_, index) => {
    // Ensure there's an image detail for this index, otherwise fallback to defaults
    const details = gridItems[index % gridItems.length] || {};
    const isVideo = details.isVideo || false;
    const showLabel = details.showLabel || false;

    let projectId = encodeURIComponent(
      String(details.label).toLowerCase().replace(/ /g, "-")
    );

    return (
      <>
        {removeLinkWrapper ? (
          <Parallax
            bgImage={details.src}
            bgImageAlt={details.alt}
            strength={200}
          >
            <div
              className={
                isCallOut ? `bento-grid-item callout-item` : `bento-grid-item`
              }
              style={{}}
            >
              <div className="grid-item-bottom-content-container">
                {showLabel ? (
                  <>
                    <div className="item-title">
                      {details.label}
                      <p>Website / Brand Identity</p>
                    </div>
                    <div className="icon-container">
                      <RiArrowRightLine size="1.5rem" color="white" />
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </Parallax>
        ) : (
          <Link to={`${details.website}`} target="_blank">
            <Parallax
              bgImage={details.src}
              bgImageAlt={details.alt}
              strength={200}
            >
              <div
                className={
                  isCallOut ? `bento-grid-item callout-item` : `bento-grid-item`
                }
                style={{}}
              >
                <div className="grid-item-bottom-content-container">
                  {showLabel ? (
                    <>
                      <div className="item-title">
                        {details.label}
                        <p>Website / Brand Identity</p>
                      </div>
                      <div className="icon-container">
                        <RiArrowRightLine siz e="1.5rem" color="white" />
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </Parallax>
          </Link>
        )}
      </>
    );
  });

  return (
    <>
      <section className="bento-grid-section">
        <div
          className={
            isCallOut
              ? `bento-grid-container callout-container`
              : `bento-grid-container`
          }
        >
          {items}
        </div>
      </section>
    </>
  );
}

export default BentoGrid;
