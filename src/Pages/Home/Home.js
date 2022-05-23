import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>

        </div>
    );
};

export default Home;