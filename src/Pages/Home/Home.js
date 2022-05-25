import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import MyReviews from '../Dashboard/MyReviews';
import Banner from './Banner';
import Featured from './Featured';
import OurServices from './OurServices';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Featured></Featured>
            <MyReviews></MyReviews>
            <OurServices></OurServices>

        </div>
    );
};

export default Home;