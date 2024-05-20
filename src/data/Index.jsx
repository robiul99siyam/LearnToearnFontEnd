import React from 'react';
import Navbar from '../pages/Navbar';  
import Hero from './../pages/Hero';
import Footer from './../pages/Footer';
import Section from '../pages/Section';
import AboutCom from './../pages/AboutCom';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Section />
           <AboutCom />

            <Footer />
        </>
    );
};

export default Home;
