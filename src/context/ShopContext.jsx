import React, { createContext, useState } from 'react'
import all_product from '../components/Assets/all_product'
export const ShopContext = createContext(null)


const getDefaultCart = ()=>{
    let cart={}
    for (let index = 0; index < all_product.length+1; index++) {
     cart[index]=0
        
    }
    return cart
  }

const ShopContextProvider = (props) => {
    const [cartitems, setCartitems] =useState(getDefaultCart())
     const addToCart=(itemid)=>{
setCartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
console.log(cartitems)
     }
     const removefromcart=(itemid)=>{
        setCartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
             }
             const getTotalCartAmount=()=>{
                let totalAmout=0;
                for(const item in cartitems){
                   if(cartitems[item]>0){
                    let itemInfo =all_product.find((product)=>product.id===Number(item))
                    totalAmout +=itemInfo.new_price*cartitems[item]
                   }
               
                }
                return totalAmout
             }
             const getTotalCartItem= ()=>{
                let totalItem=0;
                for(const item in cartitems){
                   if(cartitems[item]>0){
                    totalItem +=cartitems[item]
                   }
               
                }
                return totalItem
             }
             const ContextValue ={getTotalCartItem,getTotalCartAmount, all_product,cartitems,addToCart,removefromcart};
  return(
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  )
  
}
export default ShopContextProvider;