import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <img style={{ maxWidth: "85px" }} src="https://i.ibb.co/LJtybVR/black-yellow-minimalist-Idea-Logo-1-qmqo8tli39t0tbnmf984bih5cwhq45k6sbjdrvv2bs.png" alt="Logo" />
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
                        <li className="nav-item hvr-underline-from-left">
                            <Link className="nav-link" to="/bootcamp">Bootcamp</Link>
                        </li>
                        <li className="nav-item hvr-underline-from-left">
                            <Link className="nav-link" to="/blog-post">Blog Post</Link>
                        </li>
                        <li className="nav-item hvr-underline-from-left">
                            <Link className="nav-link" to="/services">Services</Link>
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
