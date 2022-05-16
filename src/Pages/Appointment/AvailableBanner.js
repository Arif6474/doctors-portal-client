import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableBanner = ({date}) => {
    const [services, setService] =useState([])
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setService(data))

    },[])
    return (
        <div>
            <p className="text-center text-secondary text-xl">Available Appointment on: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableBanner;