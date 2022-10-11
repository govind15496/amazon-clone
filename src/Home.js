import React from 'react';
import "./Home.css";
import Product from './Product';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <Link to="/">
                <img 
                    className="home__image"
                    src='https://m.media-amazon.com/images/I/71ZxAa-RKBL._SX3000_.jpg'
                    alt="" 
                />
            </Link>

            <div className="home__row">
                <Link to='/112'>
                    <Product 
                        id={111}
                        title="Dabur Amla Hair Oil - for Strong, Long and Thick hair - 550 ml"
                        price={179}
                        image="https://m.media-amazon.com/images/I/612ArMxOW+L._SL1500_.jpg"
                        rating={3}
                    />
                </Link>
                <Product 
                    id={112}
                    title="Pears Moisturising Bathing Bar Soap with Glycerine Pure & Gentle For Golden Glow"
                    price={184}
                    image="https://m.media-amazon.com/images/I/519h3KwY5oL._SL1000_.jpg"
                    rating={4}
                />
                
            </div>

            <div className="home__row">
                <Product
                    id={113} 
                    title="Parachute Coconut Oil - 1 L Pet Jar"
                    price={331}
                    image="https://m.media-amazon.com/images/I/61nBoAnPSEL._SL1500_.jpg"
                    rating={4}
                />
                <Product 
                    id={114}
                    title="wipro Ns9400 9-Watt B22D Wifi Smart Led Bulb With Music Sync Compatible With Amazon Alexa And Google Assistant ( Warm White/Neutral White/White, Standard )"
                    price={635}
                    image="https://m.media-amazon.com/images/I/71LIfhSpAYS._SL1500_.jpg"
                    rating={4}
                />
                <Product
                    id={115} 
                    title="Harpic Disinfectant Toilet Cleaner Liquid, Original - 1 L (Pack of 3) | India's # 1 Toilet Cleaner"
                    price={465}
                    image="https://m.media-amazon.com/images/I/71bE+X-SnUL._SL1000_.jpg"
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product 
                    id={116}
                    title="realme narzo 50i (Carbon Black, 2GB RAM+32GB Storage) - 6.5 inch Large Display | 5000mAh Battery"
                    price={6110}
                    image="https://m.media-amazon.com/images/I/81HJ4pkOsiL._SL1500_.jpg"
                    rating={4}
                />
            </div>


        </div>
    </div>
  )
}

export default Home