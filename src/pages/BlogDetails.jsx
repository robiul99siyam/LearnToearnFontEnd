import React from 'react';
import Navbar from './../pages/Navbar';
import useSWR from "swr";
import Footer from './../pages/Footer';
import { useParams } from 'react-router-dom';

const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
}

const BlogDetails = () => {
    const { id } = useParams(); 
    const { data, error } = useSWR("https://robiulislam0580.pythonanywhere.com/blog/Blog/", fetcher)

    if (error) {
        return <p>404 page not found </p>
    }

    if (!data) {
        return <p>Loading.........</p>
    }

    const blogItem = data.find(item => String(item.id) === id);
   
    
    if (!blogItem) {
        return <p> Blog Item is not found </p>
    }

    return (
        <>
            <Navbar />
            <div className='blog-product container mt-5 mb-5 '>
                <div className="card mb-3 shadow-sm">
                    <img style={{ height: "650px" }} src={blogItem.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <br />
                        <h3 className="card-title fw-bold">{blogItem.title}</h3>
                        <br />
                        <p className="card-text">{blogItem.description}</p>
                        <br />
                        <p className="card-text">{blogItem.display}</p>
                        <br />
                        <p className="card-text">{blogItem.desgin}</p>
                        <br />
                        <p className="card-text">{blogItem.parformance}</p>
                        <br />
                        <p className="card-text">{blogItem.camera}</p>
                        <br />
                        <p className="card-text">{blogItem.Atlast}</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogDetails;
