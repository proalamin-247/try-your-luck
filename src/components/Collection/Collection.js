import React from 'react';
import './Collection.css'
import { AiFillLike } from 'react-icons/ai';



const Collections = ({collection, handleDraw}) => {
    const {img, name, price, id } = collection;
    return (
        <div className='collection'>
           <img src={img} alt="" />
           <div className='collection-info'>
                <p className='collection-name'>{name}</p>
                <div>
                    <p>Price: ${price}</p>
                    <p><small>id: #{id}</small></p>
                </div>
           </div>
            <button onClick={() => handleDraw(collection)} className='like-btn'>
                <p className='like-btn-text'>Like It <AiFillLike className='like-btn-icon' /></p>
            </button>
        </div>
    );
};

export default Collections;