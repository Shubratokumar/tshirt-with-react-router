import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selected) =>{
        const exists = cart.find(tshirt => tshirt._id === selected._id);
        if(!exists){
            const newCart = [...cart, selected]
            setCart(newCart);
        }
        else{
            alert('Item already exist!!!')
        }
    }

    const handleRemoveFromCart = (selelctedItem) =>{
        const rest = cart.filter(tshirt => tshirt._id !== selelctedItem._id)
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="tshirts-container">
                {
                    tShirts.map(tshirt => <TShirt 
                        tshirt = {tshirt} 
                        key ={tshirt._id}
                        handleAddToCart ={handleAddToCart}
                        ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart = {cart} 
                key = {cart._id}
                handleRemoveFromCart ={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;