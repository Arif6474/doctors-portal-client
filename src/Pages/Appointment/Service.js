import React from 'react';

const Service = ({service , setTreatment}) => {
    const {name, slots} = service;
    return (
        <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
  <div class="card-body text-center">
    <h2 class="text-xl font-bold text-secondary">{name}</h2>
    <p>
       {
         slots.length ? <span>{slots[0]}</span> : <span className="text-red-600">No slot available</span>
       } 
    </p>
    <p>{slots.length} {slots.length >1 ? 'spaces' : 'space'} available</p>
    <div class="card-actions justify-center ">
      
      <label
      onClick={() =>setTreatment(service)}
      disabled={slots.length === 0}
       for="booking-modal" class="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default Service;