import React from 'react';
import chair from '../../assets/images/chair.png'


const Banner = () => {
    return (
        <div class="hero min-h-screen py-8 ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div class="bg-[url('https://i.ibb.co/mvNw42d/bg.png')]">
      <h1 class="text-7xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6 text-xl">Welcome to Patient Portal, Your Medical Home on the Web. With Patient Portal, you can connect with your doctor through a convenient, safe and secure </p>
      <button class="btn btn-primary text-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;