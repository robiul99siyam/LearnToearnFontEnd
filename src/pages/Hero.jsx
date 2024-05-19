import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
    return (
        <>

            <div className="hero container">
                <div className='col-lg-6 col-sm-12 col-md-6 col-6'>
                    <h1 className='hero-h1'>Learn  <br /> To Earn</h1>
                    <h5 className='hero-h5'>Freelancing And Business Guidelines</h5>
                    <p className='hero-p'>শুরু করুন শুরু থেকে, ফ্রিল্যান্সিং জার্নি আমাদের সাথে</p>
                    <div className='d-flex gap-3'>
                        <button className='hvr-sweep-to-right hero-btn'>
                            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}> Join With Us </Link>
                        </button>

                        <button className='hvr-sweep-to-right hero-btn'>
                            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}> Join Free Class </Link>
                        </button>
                    </div>

                </div>
                <div className='col-lg-6 col-sm-12 col-md-6 col-6'>
                    <img className='hero-img' src="https://i.ibb.co/2gqNnWK/graphic-cartoon-character-freelancer-vector-35942020-1-removebg-preview.png" alt="" />
                </div>
            </div>


            <div className='p-5'></div>
        </>
    )
}

export default Hero