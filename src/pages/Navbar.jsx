import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <img
                    style={{ maxWidth: "85px", marginTop: "-15px" }}
                    src="https://i.ibb.co/LJtybVR/black-yellow-minimalist-Idea-Logo-1-qmqo8tli39t0tbnmf984bih5cwhq45k6sbjdrvv2bs.png"
                    alt="Logo"
                />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item hvr-underline-from-left">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item hvr-underline-from-left">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Services
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/services/graphic-design">AI Graphics Design</Link>
                                <Link className="dropdown-item" to="/services/canva-design">Expert Canva Design</Link>
                                <Link className="dropdown-item" to="/services/chatgpt-optimization">ChatGPT Optimization</Link>
                                <Link className="dropdown-item" to="/services/passive-income-microstock">Passive Income with Microstock Sites</Link>
                                <Link className="dropdown-item" to="/services/print-on-demand-marketplace">Print-on-Demand Marketplace</Link>
                                <Link className="dropdown-item" to="/services/dropshipping-website">Dropshipping Website Creation</Link>
                                <Link className="dropdown-item" to="/services/product-listing">Product Listing</Link>
                                <Link className="dropdown-item" to="/services/free-paid-marketing">Free and Paid Marketing for Your Store</Link>
                                <Link className="dropdown-item" to="/services/freelancing-marketplace-account">Optimized Freelancing Marketplace Account</Link>
                                <Link className="dropdown-item" to="/services/freelancing-guide">Freelancing Guide</Link>
                            </div>
                        </li>
                        <li className="nav-item hvr-underline-from-left">
                            <Link className="nav-link" to="/bootcamp">Bootcamp</Link>
                        </li>
                        <li className="nav-item hvr-underline-from-left">
                            <Link className="nav-link" to="/blog-post">Blog Post</Link>
                        </li>
                        <li className="nav-item hvr-underline-from-left">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
