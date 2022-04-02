import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornament}) => {
    const ring = useContext(RingContext) 
    return (
        <div>
            <h4>Special</h4>
            {/* <p>Gift from Grandpa : {ornament}</p> */}
            <p>Gift from Grandpa : {ring}</p>
        </div>
    );
};

export default Special;