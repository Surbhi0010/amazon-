import React, { useEffect, useState } from 'react'
import { useStateValue } from '../Redux/StateProvider'
import './payment.css'
import Checkoutproduct from '../checkoutProducts/Checkoutproduct'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../Redux/Reducer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const Payment=()=>{
    const [{basket, user}, dispatch]= useStateValue()
    const stripe= useStripe();
    const Elements= useElements();
    const [processing, setProcessing]= useState("")
    const [succeeded, setSucceeded]= useState(false)
    const [error, setError]= useState(null)
    const[disabled, setDisabled]= useState(true)
    const [clientSecret, setClientSecret]= useState()



    useEffect(()=>{
const getClientSecret= async()=>{
    const response= await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket)*100}`
    })
   setClientSecret(response.data.clientSecret)
}
getClientSecret()
    }, [basket])
    
    const history= useHistory()


    const handleSubmit=async(event)=>{
        //do all the fancy strpes stuff
    event.preventDefault()
    setProcessing(true)

     const payload= await stripe.confirmCardPayment(clientSecret,{payment_method:{
         card: Elements.getElement(CardElement)
     }}).then(({paymentIntent})=>{
         setProcessing(false)
         setSucceeded(true)
         setError(null)
         history.replaceState('/orders')
     })

    }
    
    const handleChange=event=>{
        setDisabled(event.empty);
        setError(event.error ? event.error.massage: "" )

    }
    return(<>
        <div className="payment">
            <div className='payment__Container'>
             <h4><AddShoppingCartIcon/><Link to='/checkout' className='Cart__logo'>{basket?.length} items</Link>
             

             </h4>


            <div className='payment__section'>
             <div className='payment__title'>
                 <h3>Delivery Address</h3>
             </div>
             <div className='payment__address'>
                 <p>{user?.email}</p>
                 <p>station road</p>
                 <p>near pnb, barh</p>
                 <p>patna, (Bihar)</p>
             </div>

            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review Items Before Proceeding</h3>
                </div>
                <div className='payment__items'>
                    {/* //product */}
                    {basket.map(item=>(
                        <Checkoutproduct
                            id={item.id}
                            title= {item.title}
                            price={item.price}
                            rating={item.rating}
                            image= {item.image}

                        />
                    ))}
                </div>




            </div>
            <div className='payment__section'>
            <div className="payment__title">
                <h3>Payment Method</h3>

            </div>
            <div className='payment__details'>
                {/* stripe magic  enabls to use card payment method*/}
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className='payment__priceContainer'>
                        <CurrencyFormat
       renderText={(value)=>(
         <>
           
          <h5>Order Total: {value}</h5>
         </>
       )

       }
       decimalScale={2}
       value={getBasketTotal(basket)}
       displayType={"text"}
       thousandSeparator={true}
       prefix={"$"}
       

        />
        <button disabled={processing||disabled||succeeded}>
            <span>{processing? <p>Processing</p>: "Buy Now"}</span>
        </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
            </div>
                
            </div>

            </div>
        </div>
    </>)
}
export default Payment