import React from 'react'

function Landing() {
  return (
    <>
      <div className='circle'></div>
      <div className='circle flip'></div>
      <main class="landing-section wrapper">
          <div className="hero-container">
            <h1 className="heading">Designing <span className="color-gradient">websites</span> <span className="break">that look great.</span></h1>
            <button>View Projects</button>
          </div>
          <div className="scroll-animation-container">
            <div className="mouse"></div>
          </div>
      </main>
    </>
  )
}

export default Landing