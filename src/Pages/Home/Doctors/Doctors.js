import React from 'react';
import './Doctors.css';
import doctorOne from '../../../images/doctor-small.png'

const Doctors = () => {
    return (
        <div>
            <div className="doctors-area">
                <h2>Our Doctors</h2>
                <div className="container">
                    <div className="doctors-content">
                    <div className="doctor-one">
                        <img src={doctorOne} alt="" />
                        <h5>call: 01455858555</h5>
                    </div>
                    <div className="doctor-one">
                        <img src={doctorOne} alt="" />
                        <h5>call: 01455858555</h5>
                    </div>
                    <div className="doctor-one">
                        <img src={doctorOne} alt="" />
                        <h5>call: 01455858555</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;