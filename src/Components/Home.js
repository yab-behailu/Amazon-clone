import React from 'react'
import "./Home.css"
import Product from './Product'
import banner from"../Components/images/banner-image-prime-video.jpg"
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
                className='home__image' 
                //src="https://www.mitchellandbrown.co.uk/wp-content/uploads/2022/03/Prime-Video.jpg" alt="" />
                src={banner} alt="" />
                <div className='home__row'>
                    <Product
                        id="1"
                        title="Percussion Muscle Massag..."
                        price={11.98}
                        rating={5}
                        image= "https://images-na.ssl-images-amazon.com/images/I/81JnRcD0mbL._AC_SX679_.jpg"
                    />
                    <Product
                        id="2"
                        title="Beats Solo3 Wireless On-Ear Headphones - Class 1 Bluetooth, 40 Hours of Listening Time - Black (Latest Model)"
                        price={114.03}
                        rating={5}
                        image= "https://m.media-amazon.com/images/I/51QxA-98Q+L._AC_UL320_.jpg"
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id="3"
                        title="Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac, PlayStation, & Xbox -1-Year Rescue Service (STGX2000400"
                        price={11.98}
                        rating={5}
                        image= "https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
                    />
                    <Product
                         id="4"
                        title="Nintendo Switch™ with Neon Blue and Neon Red Joy‑Con"
                        price={11.98}
                        rating={5}
                        image= "https://m.media-amazon.com/images/I/61nfFrm5NcL._AC_UL320_.jpg"
                    />
                    <Product
                         id="5"
                        title="SanDisk 128GB Ultra microSDXC UHS-I Memory Card with Adapter - 120MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUA4-128G-GN6MA"
                        price={11.98}
                        rating={5}
                        image= "https://m.media-amazon.com/images/I/61jhzv9AQRL._AC_UL320_.jpg"
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id="6"
                        title="ASUS ROG Strix 34” Ultra-wide Gaming Monitor (XG349C)"
                        price={11.98}
                        rating={5}
                        image= "https://m.media-amazon.com/images/I/81RJZI8BzlS._AC_SX679_.jpg"
                    />
                </div>
        </div>
    </div>
  )
}

export default Home