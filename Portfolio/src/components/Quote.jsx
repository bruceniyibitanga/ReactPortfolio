import React from "react";

function Quote(props) {
  return (
    <div className="quote-section">
      <div className="quote-container">
        <q className="quote">{props.quote}</q>
        <div className="quote-reference">
          <p>{props.reference}</p>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Quote;
