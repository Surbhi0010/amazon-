import React from 'react';
import './product.css'
import { useStateValue } from '../Redux/StateProvider';

const Product = ({id,title, image, rating,price}) => {
  const [{basket}, dispatch]= useStateValue()
  // console.log("this is my basket////",  basket)
  

  const addToBasket=()=>{
    //dispatch the item into the datalayer
  dispatch({
    type:"ADD_TO_BASKET",
    item:{
      id:id,
      title:title,
      image:image,
      price:price,
      rating:rating

    }
  })

  }
  return <div className='product'>
      <div className='product_info'>
          <p>{title}</p>
           <p className='product_price'>
               <small>$</small>
               <strong>{price}</strong>
           </p>
           <div className='product_ratings'>
           {Array(rating).fill().map((_,i)=>(
            <p>⭐</p>
           ))}
           
           </div>
           </div>
           <img src={image} alt="" />
           <button onClick={addToBasket}>Add To Cart</button>
           
      
  </div>
};

export default Product;
