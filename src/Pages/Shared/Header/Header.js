import { Box } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut}= useAuth();
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
                    
                    {
                        user.email ? 
                        <Box>
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                            <button onClick={logOut}>LogOut</button>
                        </Box>
                        
                        :
                        <li><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;