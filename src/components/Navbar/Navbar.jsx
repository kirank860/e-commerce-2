import React, { useContext, useRef, useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import navdrop from '../Assets/navdrop.png'

const Navbar = () => {
    const [menu, setmenu] = useState("shop")
    const [isScrolled, setIsScrolled] = useState(false)
    const shopContext = useContext(ShopContext); 
    const MenuRef = useRef()
    
    const dropdown_toggle = (e) => {
      const menu = MenuRef.current;
      const button = e.currentTarget;
      
      menu.classList.toggle("nav-menu-visible");
      button.classList.toggle("open");
      
      // Prevent body scroll when menu is open
      if (menu.classList.contains("nav-menu-visible")) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}> 
      <Link style={{textDecoration:"none"}} to='/'>
        <div className='navbar__logo'>
          <div className="logo-container">
            <img src={logo} alt="" />
          </div>
          <span className="brand-name">Shopper</span>
        </div>
      </Link>  
      
      <div className="nav-center">
        <ul ref={MenuRef} className='nav-menu'>
          <li className={menu === "shop" ? "active" : ""} onClick={() => {setmenu("shop")}}>
            <Link style={{textDecoration:"none"}} to='/' onClick={() => MenuRef.current.classList.remove("nav-menu-visible")}>
              <span>Shop</span>
            </Link>
          </li>
          <li className={menu === "mens" ? "active" : ""} onClick={() => {setmenu("mens")}}>
            <Link style={{textDecoration:"none"}} to='/mens' onClick={() => MenuRef.current.classList.remove("nav-menu-visible")}>
              <span>Men's</span>
            </Link>
          </li>
          <li className={menu === "womens" ? "active" : ""} onClick={() => {setmenu("womens")}}>
            <Link style={{textDecoration:"none"}} to='/womens' onClick={() => MenuRef.current.classList.remove("nav-menu-visible")}>
              <span>Women's</span>
            </Link>
          </li>
          <li className={menu === "kids" ? "active" : ""} onClick={() => {setmenu("kids")}}>
            <Link style={{textDecoration:"none"}} to='/kids' onClick={() => MenuRef.current.classList.remove("nav-menu-visible")}>
              <span>Kids</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-actions">
        <Link to="/login" className="login-btn">
          <span>Login</span>
        </Link>
        <Link to="/cart" className="cart-container">
          <div className="cart-icon-wrapper">
            <img src={cart_icon} alt="Cart" />
            {shopContext.getTotalCartItem() > 0 && (
              <div className="cart-badge">
                {shopContext.getTotalCartItem()}
              </div>
            )}
          </div>
        </Link>
      </div>

      <button className="mobile-menu-btn" onClick={dropdown_toggle}>
        <img src={navdrop} alt="Menu" />
      </button>
    </nav>
  )
}

export default Navbar