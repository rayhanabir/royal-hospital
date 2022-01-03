import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    Royal Hospital
                </div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/appointment">Appointment</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Header;