import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';


const Banner = () => {
    return (
        <div className="hero min-h-screen py-8 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
    <div className="bg-[url('https://i.ibb.co/mvNw42d/bg.png')]">
      <h1 className="text-7xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6 text-xl">Welcome to Patient Portal, Your Medical Home on the Web. With Patient Portal, you can connect with your doctor through a convenient, safe and secure </p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;