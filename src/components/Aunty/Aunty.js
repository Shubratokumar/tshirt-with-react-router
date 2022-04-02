import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, ornament] = useContext(RingContext);
    return (
        <div>
            <h3>Aunty</h3>
            <p>House : {house}</p>
            <p>Gift from father : {ornament}</p>
        </div>
    );
};

export default Aunty;