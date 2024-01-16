import React from 'react'
import "./BreadCrums.css"
import arroy from "../Assets/breadcrum_arrow.png"
const BreadCrums = (props) => {
    const { product}=props;
  return (
    <div className='BreadCrums'>
     Home
     <img src={arroy} alt="" />
     shop <img src={arroy} alt="" /> {product.category} <img src={arroy} alt="" /> {product.name}
        </div>
  )
}

export default BreadCrums