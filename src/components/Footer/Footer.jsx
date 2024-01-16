import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import pintester from "../Assets/pintester_icon.png"
import whatsapp from "../Assets/whatsapp_icon.png"
import instagram from "../Assets/instagram_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-logo">
    <img src={footer_logo} alt="" />
    <p>SHOPPER</p>
</div>
<ul className="footer-links">
    <li>company</li>
    <li>product</li>
    <li>offices</li>
    <li>About</li>
    <li>contact</li>
</ul>
<div className="footer-social-icons">
<div className="footer-icons-container">
        <img src={instagram} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={whatsapp} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={pintester} alt="" />
    </div>
    <div className="footer-copyright">

<p>Copyright @2023 - All Rgiht Reserved.</p>
    </div>
</div>
    </div>
  )
}

export default Footer