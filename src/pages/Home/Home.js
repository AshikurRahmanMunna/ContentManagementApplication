import React from 'react';
import Banner from '../../components/Banner/Banner';
import './home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <div>
                <h2 className='text-center text-6xl font-satisfy'>Blo<span className='text-primary'>gs</span></h2>
            </div>
        </div>
    );
};

export default Home;