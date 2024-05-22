import React from 'react';
import Navbar from '../pages/Navbar';  
import Hero from './../pages/Hero';
import Footer from './../pages/Footer';
import Section from '../pages/Section';
import AboutCom from './../pages/AboutCom';
import AboutCard from './../pages/AboutCard';
import BootForm from './../pages/BootForm';
import ContactForm from './../pages/ContactForm';
import BlogPost from './../pages/BlogPost';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Section />
           <AboutCom />
            <AboutCard />
            <BootForm />
            <BlogPost />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;
