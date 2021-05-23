import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className='card'> <h3>Page not found. Go to <Link to='/login'>log in</Link> page</h3></div>
    )
}

export default NotFound;