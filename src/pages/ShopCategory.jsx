import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../context/ShopContext'
import drop_down from '../components/Assets/dropdown_icon.png'
import Items from '../components/Items/Items'
const ShopCategory = (props) => {
    const { all_product}= useContext(ShopContext)
  return (
    <div className='shop-category'>
<img className='shopcategory-banner' src={props.banner} alt="" />
<div className="shopcategory-indexsort">
<p>
    <span>Showing 1-12</span> out of 32 products
</p>
<div className="shop-category-sort">
    sort by <img src={drop_down} alt="" />
</div>
</div>
<div className="shopcategory-products">
{all_product.map((item,i)=>{
    if(props.category===item.category){
return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    }
    else{
        return null
    
    }
})}
</div>

<div className="shopcategory-loadmore">
    Explore More
</div>
    </div>
  )
}

export default ShopCategory