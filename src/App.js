import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import {Routes, Route,} from 'react-router-dom';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import { useEffect } from 'react';
import { auth } from './Components/firebase';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'; 
// import { Payment } from '@mui/icons-material';

const promise = loadStripe("pk_test_51Mo1p6A2XsecPd0MNKtID8ezp1g9hIjCrMJPdo1k285g5vNmp9pGwSZHgxsb2XFvVoJj5MOhOZryNo3xzIdZAUed003KgQfAHW");

function App() {
  const[{},dispatch]= useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
       //console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
        <div className="App">
          
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/payment' element={<>
                <Header />
                <Elements stripe={promise}>
                  <Payment/>
                </Elements>
                </>
              } 
            />
            
            <Route path='/checkout' element={<div><Header/><Checkout/></div>}/>
            <Route path='/' element={<div><Header/><Home/></div>}/>
          </Routes>
        </div>
  );
}

export default App;
