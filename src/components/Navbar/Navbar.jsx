import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
const Navbar = () => {
    const [menu, setmenu] =useState("shop")
    const shopContext = useContext(ShopContext); 
  return (
    <div className='navbar'> 
<div className='navbar__logo'>
<img src={logo} alt="" />    
<p>Shopper</p>
 </div>
  <ul className='nav-menu'>
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