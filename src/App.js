import React, { useEffect } from 'react';
import Header from './Header/Header';
import Home from "./Home/Home"
import './Index.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './checkout/Checkout'
import Login from './Login/Login';
import {auth} from './firebase'
import { useStateValue } from './Redux/StateProvider';
import Payment from './Payment/Payment'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './Footer/Footer';


const  promise= loadStripe('pk_test_51KQYEoSJKW02H5dLzLjCGaQFZgNEQ7FvYoG2J2Kh4YS1evB7dUIOclThW6VJ7cBUH0KDs6060OXleVHpGJM4H4Sn006t6u5b4w')


const App = () => {
const [{}, dispatch] = useStateValue()
//using useEffect for our authentication email password, who have signed in. we should have all the data
//it is also used to cancel negative effects.
//It onlu run once when the app componenets load.
useEffect(()=>{
 auth.onAuthStateChanged(authUser=>{
   console.log('The user is ', authUser)
   if(authUser){
     //the user just logged in or user was  logged in.\
     dispatch({
       type:'SET_USER',
       user: authUser
     })
   }
   else{
     //user is logged out.
    dispatch({
      type: 'SET_USER',
      user: null
    })
   }
 })
 //onAuthStateChange is a event listener who always listens and refires its code
},[])






  return (
  <>
  <Router>
  <div className='app'>
  
  
  <Switch>
  <Route path='/login'>
    <Login/>
  </Route>


  <Route path='/checkout'>
  <Header/>
    <Checkout/>
    <Footer/>
    </Route>


    <Route path='/payment'>
  <Header/>
  <Elements stripe={promise}>
  <Payment/>
  </Elements>
   
    </Route>


  <Route path='/'>
  <Header/>
    <Home/>
    <Footer/>
    </Route>
  </Switch>
  
    </div>
  </Router>
    
  </>
  )
};

export default App;
