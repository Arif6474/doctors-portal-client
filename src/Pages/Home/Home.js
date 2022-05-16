import React from 'react';
import Banner from './Banner';
import Comminucate from './Comminucate';
import Dental from './Dental';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div px-12>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Dental></Dental>
        <MakeAppointment></MakeAppointment>
        <Testimonials></Testimonials>
       <Comminucate></Comminucate>
        </div>
    );
};

export default Home;