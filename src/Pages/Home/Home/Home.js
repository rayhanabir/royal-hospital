import React from 'react';
import Doctors from '../Doctors/Doctors';
import Info from '../Info/Info';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <TopBanner/>
            <Info/>
            <Services/>
            <Treatment/>
            <Doctors/>
            
        </div>
    );
};

export default Home;