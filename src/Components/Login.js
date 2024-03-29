import React, { useState, } from 'react'
import "./Login.css"
import Amazon_logo from "../Components/images/Amazon_logo.svg.png"
import { auth } from './firebase';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate} from 'react-router-dom';
function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        
            
            .then((auth) => {
                //console.log(auth)
                history('/');
            })
            .catch((error)=> alert(error.message));
      };
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
         
            .then(auth=> {
                //console.log(auth)
                if(auth){
                    history('/');
                }
            })
            .catch((error) => alert(error.message));

    }
  return (
    <div className='login'>
        <Link to ="/">
            <img
                className="login__logo"
                src={Amazon_logo} alt=''
            />
        </Link>
       
        <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <div className='a-divider a-divider-break'>
          
          <h5 className='divider'>New to Amazon?</h5>
        </div>
        <button onClick={register} className="login__registerButton">
            Create your Amazon Account
        </button>
        
      </div>
    </div>
  );
}   
export default Login