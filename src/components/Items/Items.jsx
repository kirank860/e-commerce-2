import React from 'react'
import "./Items.css"
import { Link } from 'react-router-dom'
const Items = (props) => {
  return (
    <div className='items'>
    <Link to={`/product/${props.id}`}> <img onClick={window.scroll(0,0)} src={props.image} alt="img" /></Link> 
    <p>{props.name}</p>
    <div className="item-prices">
    <div className="item-price-new">
        ${props.new_price}
    </div>
    <div className="item-price-old">
        ${props.old_price}
    </div>
</div>
    </div>
  )
}

export default Items