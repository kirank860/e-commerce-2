import React from 'react'
import './Hero.css'
import hand_img from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero_img from "../Assets/hero_image.png"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2> 
<div>
    <div className="hero-hand-icon">
        <p>New</p>
        <img src={hand_img} alt="" />
    </div>
    <p>COLLECTIONS</p>
    <p>for everyone</p>
</div>
<div className="hero-latest-btn">
<div>Latest collections</div>
 <img src={arrow} alt="sksdks" />
</div>

        </div>
        <div className="hero-right">
<img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero