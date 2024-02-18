import React from 'react';

function SectionHeaders(props) {
    return (
        <>
            <div className="text-container wrapper">
                <h3>{props.section}</h3>
                <h2>{props.subheading}</h2>
                <p>{props.paragraph}</p>
            </div>
        </>
    )
}

export default SectionHeaders