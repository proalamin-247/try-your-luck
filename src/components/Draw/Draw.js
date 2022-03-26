import React from 'react';
import './Draw.css'

const Draw = ({liked}) => {
    const {name, img } = liked;
    return (
        <div className='draw-area'>
            <div className='draw'>
                <img src={img} alt="" />
                <p> {name}</p>
            </div>
        </div>
    );
};

export default Draw;