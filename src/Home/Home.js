import React from 'react';
import './home.css'
import Product from '../product/Product';


const Home = () => {




  return (
      <div className='home'>
          <div className='home_container'>
          
              <img className='home_img' src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg" alt="img" />
          </div>
          <div className='home_row'>
              <Product title='nvchbdhjbcjhshshxn   nbbjchd bbcjhchcu bcjhbdhj' 
              price={560.23}
              image="https://images-eu.ssl-images-amazon.com/images/I/41Z5NEsKo9L._AC_SR400,600_.jpg"
              rating={5} />

              <Product title='bbj jd kdhcjh'
               price={20.23}
               image="https://m.media-amazon.com/images/I/61plSs1NLmL._AC_UL480_FMwebp_QL65_.jpg"
               rating={3}/>
              
          </div>
          <div className='home_row'>
              <Product title='nvchbdhjbcjhshs sdbhcb'
               price={60.23}
               image="https://images-eu.ssl-images-amazon.com/images/I/41Z5NEsKo9L._AC_SR400,600_.jpg"
              rating={2}/>

              <Product title='nvcnmnf mfnkfkj  nbbjchd bbcjhchcu bcjhbdhj'
               price={460.23} 
               image="	https://m.media-amazon.com/images/I/41m0Axza34L._AC._SR360,460.jpg"
               rating={4}/>
              <Product title='nvchbdhjbcjhshshxn   nbbjchd bbcjhchcu bcjhbdhj'
               price={570.23}
               image="https://m.media-amazon.com/images/I/41+xfzLy0zS._AC._SR360,460.jpg"
              rating={5}/>
              
          </div>
          <div className='home_row'>
          <Product title='nvchbdhjbcjhshshxn   nbbjchd bbcjhchcu bcjhbdhj' 
          price={570.23} 
          image="https://m.media-amazon.com/images/I/61hMQOHmEIL._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}/>
              
          </div>
      </div>
  )
};

export default Home;
// now m heading to make my next page which is i  make with the help of react router .