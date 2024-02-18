import React from 'react';

function ExperienceTiles(props) {

    return(
        <>
            <div class="tile">
                <img
                className="tile-icon"
                src={props.icon}
                alt={props.alt}
                />
                <p class="tile-heading">{props.heading}</p>
                <p>{props.text}</p>
          </div>
        </>
    )

}

export default ExperienceTiles
