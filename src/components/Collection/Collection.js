import React from 'react';
import './Collection.css'

const Collections = (props) => {
    const {img, name, price } = props.collection;
    return (
        <div className='collection'>
           <img src={img} alt="" />
           <div className='collection-info'>
                <p className='collection-name'>{name}</p>
                <p>Price: ${price}</p>
           </div>
        </div>
    );
};

export default Collections;