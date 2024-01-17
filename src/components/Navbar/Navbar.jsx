import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import navdrop from '../Assets/navdrop.png'
const Navbar = () => {
    const [menu, setmenu] =useState("shop")
    const shopContext = useContext(ShopContext); 
    const MenuRef =useRef()
    const dropdown_toggle = (e) => {
      MenuRef.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle("open");
    }
    
  
  return (
    <div className='navbar'> 
    <Link style={{textDecoration:"none"}} to='/'>
<div className='navbar__logo'>
<img src={logo} alt="" />
<p>Shopper</p>
 </div>
 </Link>  
 <img onClick={dropdown_toggle} className='nav-dropdown' src={navdrop} alt="" />
  <ul ref={MenuRef} className='nav-menu'>
<li onClick={()=>{setmenu("shop")}} ><Link style={{textDecoration:"none"}} to='/'>shop</Link> {menu==="shop"? <hr/>:<></>} </li>
<li  onClick={()=>{setmenu("mens")}} ><Link  style={{textDecoration:"none"}} to='/mens'>mens</Link>  {menu==="mens"? <hr/>:<></>} </li>
<li  onClick={()=>{setmenu("womens")}} ><Link  style={{textDecoration:"none"}} to='/womens'>womens</Link>  {menu==="womens"? <hr/>:<></>} </li>
<li  onClick={()=>{setmenu("kids")}} ><Link  style={{textDecoration:"none"}} to='/kids'>kids</Link>  {menu==="kids"? <hr/>:<></>} </li>
  </ul>
  <div className="nav-login-cart">
<Link to="/login"><button>login</button></Link>
<Link to="/cart"><img src={cart_icon} alt="" /></Link>
<div className="nav-cart-count">
{shopContext.getTotalCartItem()}
</div>
  </div>
    </div>
  )
}

export default Navbar