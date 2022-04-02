import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house,ornament] = useContext(RingContext) 
    return (
        <div>
            <h4>Special</h4>
            {/* <p>Gift from Grandpa : {ornament}</p> */}
            <p>Gift from Grandpa : {ornament}</p>
        </div>
    );
};

export default Special;