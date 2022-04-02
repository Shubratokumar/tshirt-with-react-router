import React from 'react';
import './TShirt.css'

const TShirt = ({handleAddToCart, tshirt}) => {
    const {name, picture, price, gender} = tshirt;
    return (
        <div className='tshirt-container'>
            <img src={picture} alt="" />
            <h3>Name : {name}</h3>
            <h4>price : $ {price}</h4>
            <h5>Gender : {gender}</h5>
            <button onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;