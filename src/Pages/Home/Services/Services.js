import React from 'react';
import './Services.css';
import cavity from '../../../images/cavity.png'
import fluoride from '../../../images/fluoride.png'
import whitening from '../../../images/whitening.png'

const Services = () => {
    return (
        <div>
            <div className="service-container">
                <h4>Our Service</h4>
                <h2>Service We Provide</h2>
                <div className="container">
                    <div className="main-service">
                        <div className="cavity">
                            <img src={cavity} alt="" />
                            <h3>Cavity Filling</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero molestias laudantium animi, dolorem atque quae ratione odit. Ipsum, eaque?</p>
                        </div>
                        <div className="flouride">
                            <img src={fluoride} alt="" />
                            <h3>Fluoride Treatment</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero molestias laudantium animi, dolorem atque quae ratione odit. Ipsum, eaque?</p>
                        </div>
                        <div className="whitening">
                            <img src={whitening} alt="" />
                            <h3>Teeth Whitening</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero molestias laudantium animi, dolorem atque quae ratione odit. Ipsum, eaque?</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Services;