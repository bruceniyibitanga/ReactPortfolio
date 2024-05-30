import { React, useRef, useState, useEffect } from "react";
import SectionHeaders from "../components/SectionHeaders";
import { Link } from "react-router-dom";

function BentoGrid({
  x = 2,
  y = 1,
  isCallOut = false,
  gridItems = [
    { isVideo: false, showLabel: false, label: "", src: "", alt: "" },
  ],
}) {
  useEffect(() => {}, []);
  // Calculate the total number of divs needed
  const totalDivs = x * y;

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
      <Link key={index} to={`/projects/${projectId}`}>
        <div
          className={
            isCallOut ? `bento-grid-item callout-item` : `bento-grid-item`
          }
          style={{}}
        >
          {
            // If the item is a video, render the video element
            isVideo ? (
              <video autoPlay loop muted aria-label={details.alt}>
                <source src={details.src} type="video/mp4" />
              </video>
            ) : (
              <img src={details.src} alt={details.alt} />
            )
          }

          {showLabel ? <div className="item-title">{details.label}</div> : null}
        </div>
      </Link>
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
