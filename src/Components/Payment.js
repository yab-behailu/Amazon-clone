import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from "react-router-dom";
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { set } from 'firebase/database';
import axios from './axios.js';


function Payment() {
    const [{ basket,user},dispatch] = useStateValue(); 
    const history = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const[error,setError]=useState(null);
    const[disabled,setDisabled]=useState(true);

    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");

    const[clientSecret,setClientSecret] = useState(true);
    
    useEffect(() => {
      const getClientSecret = async()=>{
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${getBasketTotal(basket)*100}`,
        });
        setClientSecret(response.data.clientSecret);
      };
      getClientSecret();

    }, [basket])
    

    const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement),
            },
        }).then(({ paymentIntent })=>{
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            history.replace('/orders')
        })


    }
    const handleChange = (e) =>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message: "");
    }

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>
                <div className='payment__section'>
                    <div className='payment__title'><h3>Delivery Address</h3></div> 
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Chicago, IL</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map((item)=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}    
                            />
                        ))}               
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                            <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value)=> <h3>Order Total: {value}</h3>}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={'text'}
                                        prefix={'$'}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                    </button>
                                    {error && <div>{error}</div>}
                                </div>
                            </form>
                    </div>      
                </div>
        </div>
    </div>
  )
}

export default Payment