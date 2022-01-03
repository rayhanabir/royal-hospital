import React from 'react';
import './Info.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

const Info = () => {
    return (
        <div>
           <div className="container">
                <div className="info">
                    <div className="info-content">
                        <div className="hour">
                            <div className="icon">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div className='info-des'>
                                <h4>Opening Hours</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, officiis.</p>
                            </div>

                        </div>
                        <div className="location">
                            <div className="icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className='info-des'>
                                <h4>Opening Hours</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, officiis.</p>
                            </div>

                        </div>
                        <div className="contact">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </div>
                            <div className='info-des'>
                                <h4>Opening Hours</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, officiis.</p>
                            </div>

                        </div>
                    </div>
                </div>  
            </div> 
        </div>
    );
};

export default Info;