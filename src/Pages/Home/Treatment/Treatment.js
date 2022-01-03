import React from 'react';
import './Treatment.css';
import treatment from '../../../images/treatment.png'

const Treatment = () => {
    return (
        <div>
            <div className="treatment">
                <div className="container">
                    <div className="treatment-container">
                        <div className="treatment-img">
                            <img src={treatment} alt="" />
                        </div>
                        <div className="treatment-content">
                            <h2>Exceptional Dental Care, <br />On your Terms</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consequatur id atque maxime, dolore at aliquid consequuntur est laboriosam nihil sit suscipit vitae nemo quod? Eligendi autem deleniti accusantium asperiores repudiandae minus ullam impedit distinctio.</p>
                            <button className='main-button'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;