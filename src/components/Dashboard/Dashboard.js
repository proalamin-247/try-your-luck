import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';
import Draw from '../Draw/Draw';
import './Dashboard.css'
import { AiFillFire } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';

const Dashboard = () => {

    const [collections, setCollections] = useState([]);
    const [draw, setDraw] = useState([]);

    const handleDraw = (collection) => {
        const newCollection = [...draw, collection];
        setDraw(newCollection);
    }

    useEffect( ()=>{
        fetch(`collections.json`)
            .then(res=> res.json())
            .then(data => setCollections(data))
    },[]);

    const drawBtn = () => {
        if (draw.length === 0) {
            alert('please select your faviourit collection')
        }
        else {
            const newDraw = [...draw];
            const randomdraw = Math.floor(Math.random() * newDraw.length);
            alert('Your Random item: ' + newDraw[randomdraw].name);
        }
    }

    const reset = () => {
        if (draw.length === 0) {
            alert('please select your faviourit collection')
        }
        else {
            setDraw([]);
        }
    }

    return (
        <div className='dashboard-container'>
             <div className="dashboard-collection-area">
                <h1 className='collection-area-title'>Collections</h1>
                <div className='collection-area'>
                    {
                        collections.map(collection => <Collection
                            key={collection.id}
                            collection={collection}
                            handleDraw = {handleDraw}
                        ></Collection>)
                    }
                </div>
             </div>
             <div className="lucky-area">
                 <h1 className='lucky-area-title'>Check yours luck</h1>
                 <div className='lucky-component'>
                     {
                        draw.map(liked=> <Draw
                        key={liked.id}
                        liked ={liked}
                        ></Draw>)
                     }
                    <div className='luck-area-btn'>
                        <button onClick={drawBtn} className='lucky-btn'>My luck <AiFillFire className='lucky-btn-icon' /></button>
                        <br />
                        <button onClick={() => reset()} className='reset-btn'>Reset<BiReset className='rest-btn-icon' /> </button>
                    </div>
                 </div>
             </div>
        </div>
    );
};

export default Dashboard;