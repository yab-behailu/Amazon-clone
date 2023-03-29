import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import ad_banner from "../Components/images/ad-banner3.jpg"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
  const[{ basket }] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad' 
          src={ad_banner} alt="" />
        <h3>Hello</h3>
        <h2 className='checkout__title'>Your shopping Basket</h2> 
        {basket.map((item) =>(
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        ))
        }
      </div>
      <div className='checkout__right'>
          <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout