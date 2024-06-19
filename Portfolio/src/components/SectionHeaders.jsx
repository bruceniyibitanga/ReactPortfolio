import React from 'react';

function SectionHeaders(props) {
    return (
      <>
        <div className="text-container">
          <h2>{props.section}</h2>
          {/* <h2>{props.subheading}</h2> */}
          <p>{props.paragraph}</p>
        </div>
      </>
    );
}

export default SectionHeaders