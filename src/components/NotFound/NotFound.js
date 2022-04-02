import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>The page you are searching not found !!!</h3>
            <h5>404</h5>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
};

export default NotFound;