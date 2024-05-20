import React from 'react';
import Navbar from '../pages/Navbar';  
import Hero from './../pages/Hero';
import Footer from './../pages/Footer';
import Section from '../pages/Section';
import AboutCom from './../pages/AboutCom';
import AboutCard from './../pages/AboutCard';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Section />
           <AboutCom />
            <AboutCard />
            <Footer />
        </>
    );
};

export default Home;
