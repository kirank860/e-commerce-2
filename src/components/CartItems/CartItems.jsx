import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../context/ShopContext';
import removeicon from "../Assets/cart_cross_icon.png"
const CartItems = () => {
    const {getTotalCartAmount, all_product,cartitems,removefromcart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
       <div className="cartitems-format-main">
<p>products</p>
<p>title</p>
<p>price</p>
<p>quantity</p>
<p>total</p>
<p>remove</p>
       </div>
       <hr />
   {all_product.map((e)=>{
if(cartitems[e.id]>0){
    return     <div>
    <div className='cartitems-format cartitems-format-main'>
        <img className='carticon-product-icons' src={e.image} alt="" />
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button className='cartitems-quantity'>{cartitems[e.id]}</button>
        <p> ${e.new_price * cartitems[e.id]}</p>
 <img className='cartitem-removeicon' src={removeicon} onClick={()=>{removefromcart(e.id)}} alt="" />
    </div>
    <hr />
   </div>
}
return null
   })}
   <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>carts Totals</h1>
            <div>
                <div className="cartitems-total-item">
<p>SubTotal</p>
<p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cartitems-total-item"'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartitems-total-item"'>
                    <h3>total</h3>
                    <h3>${0}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
  <div className='cartitems-promocode'>
    <p>if you have a promocode please enter it here</p>
    <div className="cartitems-promo-box">
        <input type="text" placeholder='promocode' />
        <button>submit</button>
    </div>
  </div>
   </div>
    </div>
  )
}

export default CartItems