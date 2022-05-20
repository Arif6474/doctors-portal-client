import { format } from 'date-fns';
import React, {  useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableBanner = ({date}) => {
    // const [services, setService] =useState([])
    const [treatment, setTreatment] =useState(null)
    const formattedDate = format(date, 'PP')
     
    const {data : services , isLoading  , refetch} = useQuery(['available', formattedDate] ,() => fetch(`http://localhost:5000/available?date=${formattedDate}`)
     .then(res => res.json()))
    
     if(isLoading) {
         return <Loading></Loading>
     }
    // useEffect(() =>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setService(data))

    // },[formattedDate])
    return (
        <div>
            <p className="text-center text-secondary text-xl">Available Appointment on: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                       setTreatment={setTreatment} 
                       refetch={refetch}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal  refetch={refetch} date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableBanner;