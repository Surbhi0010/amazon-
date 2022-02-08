// checkout section has two parts... 
//checkout left and cheout right
//left containg showing things that we have
//choose to buy
//right section is something that is 
//showing checkpot list with total money.



import React from 'react';
import './Checkout.css'
import Subtotal from '../subtotal/Subtotal';
import { useStateValue } from '../Redux/StateProvider';
import Checkoutproduct from '../checkoutProducts/Checkoutproduct';


const Checkout = () => {
    const [{basket,user}, dispatch]= useStateValue()
  return (
      <div className='checkout'>
          <div className="checkout__left">
              <img  className='checkout_add' src="https://hotdealszone.com/wp-content/uploads/2018/10/great-indian-festival-sale-add-money-offer.png" alt="" />
              <div>
              <h4>Hello, {user?.email}</h4>
                  <h2 className="checkout_title">Your Cart</h2>
                  {/* checkoutproducts */}
                  {basket.map(item=>(
                    <Checkoutproduct 
                     id={item.id}
                         title={item.title}
                         price={item.price}
                         image={item.image}
                         rating={item.rating}
                     />
                   

                  ))}
                  

              </div>
              
          </div>
          <div className='checkout__right'>
          <Subtotal/>
              
              
          </div>
      </div>
  )
};

export default Checkout;
