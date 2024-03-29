import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import logo from"../Components/images/amazon_PNG11.png"
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from './StateProvider'
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function Header() {
    const[{ basket, user }] = useStateValue();
    const handleAuthentication = () =>{
        if(user){
            signOut(auth);
        }
    }
  return (
    <div className='header'>
        <Link to="/">
            <img 
                className='header__logo'
                src={logo} alt='logo'/>
        </Link>
        <div className='header__search'>
            <input className='header__searchInput' type="text" />
            <SearchIcon className ="header__searchIcon" />
        </div>
        <div className='header__nav'>
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLineOne'>Hello {!user? 'Guest':user.email}</span>
                    <span className='header__optionLineTwo'>{user? 'Sign Out': 'Sign In'}</span>
                </div>
            </Link>
            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
         <Link to='/checkout'>
            <div className='header__optionBasket'>
                <AddShoppingCartIcon/>
                <span className='header__optionLineTwo header__basketCount'>
                    {basket.length}
                </span>
            </div>
         </Link>
            
        </div>
    </div>
  );
}

export default Header