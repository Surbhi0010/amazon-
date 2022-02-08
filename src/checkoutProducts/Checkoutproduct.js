import React from 'react'
import { useStateValue } from '../Redux/StateProvider'
import './checkoutproduct.css'
 const Checkoutproduct=({id, price, image, rating,title})=>{
     const [{basket,user}, dispatch]= useStateValue()

    const removeFromCart=()=>{
        //remove item from cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id,

        })
    }
  return(
      <div className='checkoutproduct'>
      <img src={image} alt="" />
      <div className='checkoutproduct__info'>
          <p className='checkout__title'>{title}</p>
          <p className='checkout__price'>
          <small>$</small>
          <strong>{price}</strong>
          </p>
          <div className='checkoutproduct__rating'>{Array(rating).fill().map((_, i)=>(<p>⭐</p>))}</div>
          <button onClick={removeFromCart}>Remove From Cart</button>

      </div>
     

      </div>

  )
 }
export default Checkoutproduct