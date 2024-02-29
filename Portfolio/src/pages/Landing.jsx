import React from 'react';
import Button from '../components/Button';

function Landing() {
  return (
    <>
      <div className="landing-container image-container">
        <div className="overlay"></div>
        <div className="image-container">
          <img src="/img/profile.webp" alt="Image of Bruce sitting on bench in a forest." />
        </div>
        <div className="landing-content-container">
          <div className="color-bg-container">
            <div className="yellow"></div>
            <div className="light-blue"></div>
          </div>
          <div className="text-container">
            <h1>Hello, I’m Bruce, a passionate software developer and engineer.</h1>
            <p>Crafting digital solutions with a personal touch.</p>
          </div>
          <div className="btn-container">
            <Button text="Contact me"/>
            <Button text="Projects"/>
          </div>
        </div>
        <div className="scroll-animation-container">
            <div className="mouse"></div>
        </div>
      </div>
    </>
  )
}

export default Landing