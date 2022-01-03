import React from 'react';
import './TopBanner.css';
import chair from '../../../images/chair.png'

const TopBanner = () => {
    return (
        <div>
            <div className="banner-bg">
                <div className="container">
                    <div className="main-content">
                        <div className="banner-content">
                            <h1>Your New Smile Start Here</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas ullam? Esse quisquam necessitatibus qui ex. Quasi necessitatibus labore consectetur quo tenetur, veniam repellendus porro quod magnam animi dignissimos quos!</p>
                            <button className='main-button'>Get Appointment</button>
                        </div>
                        <div className="front-img">
                            <img src={chair} alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TopBanner;