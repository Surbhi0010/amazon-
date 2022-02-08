import React from 'react';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Redux/StateProvider';
import { auth } from '../firebase';

const Header = () => {
    const [{basket,user},dispatch]= useStateValue()
    const handleAuthentication=()=>{
        if(user){
            auth.signOut()
        }
    }
  return (<>
      <div className='header'>
      <Link to='/'><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" className='header_logo' /></Link>
          
          <div className='header_search'><input type="text" className='header_searchInput' /><SearchIcon className='header_searchIcon'/></div>
          <div className='header_navbar'>
              <Link  to={!user && '/login'}><div onClick={handleAuthentication} className='header_option'><span className='header_option1'>{user? ` Hey f${user?.email}`: 'Hello Guest'}</span><span className='header_option2'>{user ? 'Sign-out': 'Sign-in'}</span></div></Link>
              <div className='header_option'><span className='header_option1'>Returns</span><span className='header_option2'>& Orders</span></div>
              <div className='header_option'><span className='header_option1'>your</span><span className='header_option2'>Prime</span></div>
              
          </div>
          <Link to='/checkout'>
          <div className='header_basketLogo'><ShoppingBasketIcon/>
          <span className='header_optionLine2 header_basketCount'>{basket?.length}</span>
          </div>
          </Link>
         
      </div>
  </>)
};

export default Header;
