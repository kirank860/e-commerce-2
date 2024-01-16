import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star from "../Assets/star_icon.png"
import star_dull from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
   const {addToCart}= useContext(ShopContext)
  return (
    <div className='Productdisplay'>
         <div className="productdisplay-left">
            <div className="productdisplay-img-list">
<img src={product.image} alt="" />
<img src={product.image} alt="" />
<img src={product.image} alt="" />
<img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
            </div>
        <div className="productdisplay-right">
<h1>{product.name}</h1>
<div className="productdisplay-right-star">
    <img src={star} alt="" />
    <img src={star} alt="" />
    <img src={star} alt="" />
    <img src={star} alt="" />
    <img src={star_dull} alt="" />
    <p>(122)</p>
</div>
<div className="productdisplay-right-price">
    <div className="productdisplay-right-old">
        ${product.old_price}
    </div>
    <div className="productdisplay-right-new">
        ${product.new_price}
    </div>
</div>
<div className="productdisplay-right-descriptions">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi repellendus numquam, ratione nam earum maxime in reprehenderit cum maiores quae neque ipsam temporibus. Molestias saepe animi autem odio iure.

</div>
<div className="productdisplay-right-size">
    <h1>Select Size</h1>
    <div className="productdisplay-right-sizes">
        <div>s</div>
        <div>m</div>
        <div>l</div>
        <div>xl</div>
        <div>xxl</div>
    </div>
</div>
<button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
<p className='productdisplay-right-category'><span>category :</span>
women,t-shirts,crop tops
</p>
<p className='productdisplay-right-category'><span>Tags :</span>
modern,stylish,comfortable
</p>
        </div>
       
    </div>
  )
}

export default ProductDisplay