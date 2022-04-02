import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    // const {name, picture, price, gender} = props.cart;
    // Conditional rendering options
    // 1. Elements variable:
    // 2. ternary operator : 
    let command;
    if(cart.length === 0){
        command = <p>Please add at least one items!!!</p>
    }
    else  if(cart.length === 1){
        command = <p>Please add more than one... </p>
    }
    else{
        command = <p><small>Thanks for adding items.</small></p>
    }

    return (
        <div>
            <h2>Items Selected : {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    Name : {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)} > X</button>
                    </p>)
            }
            {
                cart.length === 3 && 
                <div className='and'>
                    <h4>Tigonal</h4>
                    <p>Are you giving three people?</p>
                </div>
            }
            {
                cart.length === 0 ||
                <p className='or'>YAY ! You are buying.</p>
            }
            {command}
            {cart.length !== 4 ? 'Keep adding' : <button>Remove all</button>}
        </div>
    );
};

export default Cart;