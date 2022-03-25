import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';
import './Dashboard.css'

const Dashboard = () => {

    const [collections, setCollections] = useState([]);

    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
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
                        ></Collection>)
                    }
                </div>
             </div>
             <div className="lucy-area">
                 <h1>See yours luck</h1>
             </div>
        </div>
    );
};

export default Dashboard;