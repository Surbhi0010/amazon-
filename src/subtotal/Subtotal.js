import React from 'react';
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../Redux/StateProvider';
import { getBasketTotal } from '../Redux/Reducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Subtotal = () => {
  const [{basket}, dispatch]= useStateValue()
  const history= useHistory()
  return(
      <div className='subtotal'>
      <CurrencyFormat
       renderText={(value)=>(
         <>
           <p> Subtotal ({basket?.length}items):
           <strong>{value}</strong>
           </p>
           <small className='subtotal__gift'><input type="checkbox" />This order contains a gift</small>
         </>
       )

       }
       decimalScale={2}
       value={getBasketTotal(basket)}
       displayType={"text"}
       thousandSeparator={true}
       prefix={"$"}
       

        />
<button onClick={e=> history.push('/payment')}>Proceed To Checkout</button>


      </div>
  )
};

export default Subtotal;
