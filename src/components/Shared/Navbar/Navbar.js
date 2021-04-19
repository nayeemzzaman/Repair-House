import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <h1 class="navbar-brand" style={{fontSize: '3px-00px',fontWeight:'700'}}>REPAIR  <span style={{color:'orange',fontWeight:'700', marginLeft:'5px'}}>HOUSE</span></h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-4 px-0" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4 px-0" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4 px-0" href="#service">Services</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4 px-0" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4 px-0" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 px-0" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;