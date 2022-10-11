import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
// import FlipMove from 'react-flip-move';

function CheckoutProduct({ id, image, title, price, rating }) {
    // eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

  return (

    // <FlipMove>
        <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt='' />


        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>

            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}  
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
    // </FlipMove>
  )
}

export default CheckoutProduct;