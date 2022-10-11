import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  // eslint-disable-next-line
  const [{basket, user}, dispatch] = useStateValue();


  return (
    <div className='checkout'>
     
        <div className='checkout__title'>
        <h1>Hello, {user?.email}</h1>
            <h2>Shopping Cart</h2>
              <hr />


            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout;