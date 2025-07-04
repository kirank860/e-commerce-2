import React from 'react'
import './Hero.css'
import hand_img from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero_img from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-text">NEW ARRIVALS ONLY</span>
        </div>
        
        <div className="hero-content">
          <div className="hero-title">
            <h1 className="hero-main-text">
              <span className="hero-new">New</span>
              <div className="hero-hand-icon">
                <img src={hand_img} alt="hand icon" />
              </div>
            </h1>
            <h1 className="hero-collections">COLLECTIONS</h1>
            <p className="hero-subtitle">for everyone</p>
          </div>
          
          <div className="hero-cta">
            <button className="hero-latest-btn">
              <span>Latest collections</span>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="hero-image-container">
          <img src={hero_img} alt="hero" />
          <div className="hero-image-overlay"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero