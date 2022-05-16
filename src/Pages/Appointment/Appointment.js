import React, { useState } from 'react';

import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableBanner from './AvailableBanner';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableBanner date={date} setDate={setDate}></AvailableBanner>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;