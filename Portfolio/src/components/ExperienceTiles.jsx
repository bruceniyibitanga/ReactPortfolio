import React from 'react';

function ExperienceTiles(props) {

    return(
        <>
            <div className="tile">
                <img
                className="tile-icon"
                src={props.icon}
                alt={props.alt}
                />
                <p className="tile-heading">{props.heading}</p>
                <p>{props.text}</p>
          </div>
        </>
    )

}

export default ExperienceTiles
