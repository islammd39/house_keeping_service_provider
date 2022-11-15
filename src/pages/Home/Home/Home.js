import React from 'react';
import Contact from '../../Contact/Contact';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;