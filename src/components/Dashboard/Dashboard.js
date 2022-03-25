import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';
import Draw from '../Draw/Draw';
import LuckyButton from '../LuckyButton/LuckyButton';
import './Dashboard.css'

const Dashboard = () => {

    const [collections, setCollections] = useState([]);
    const [draw, setDraw] = useState([]);
    console.log(draw);

    const handleDraw = (collection) => {
        const newCollection = [...draw, collection];
        setDraw(newCollection);
    }

    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        // fetch(`products.json`)
            .then(res=> res.json())
            .then(data => setCollections(data))
    },[]);


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
                 <h1 className='lucky-area-title'>See yours luck</h1>
                 <div className='lucky-component'>
                     {
                        draw.map(liked=> <Draw
                        key={liked.id}
                        liked ={liked}
                        ></Draw>)
                     }
                    <span className='btn-draw'><LuckyButton></LuckyButton></span>
                 </div>
             </div>
        </div>
    );
};

export default Dashboard;