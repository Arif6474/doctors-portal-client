import React from 'react';

const Service = ({service , setTreatment}) => {
    const {name, slots} = service;
    return (
        <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-secondary">{name}</h2>
    <p>
       {
         slots.length ? <span>{slots[0]}</span> : <span className="text-red-600">No slot available</span>
       } 
    </p>
    <p>{slots.length} {slots.length >1 ? 'spaces' : 'space'} available</p>
    <div class="card-actions ">
      
      <label
      onClick={() =>setTreatment(service)}
      disabled={slots.length === 0}
       for="booking-modal" class="btn btn-secondary text-white">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default Service;