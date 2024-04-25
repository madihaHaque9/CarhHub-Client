/* eslint-disable react/prop-types */


import Calender from './Calender';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { formatDistance } from 'date-fns';
import BookingModal from '../../components/Modal/BookingModal';
import useAuth from '../../hooks/useAuth';


const CarReserve = ({car}) => {
    console.log(car);
    let [isOpen, setIsOpen] = useState(true)
    const {user}=useAuth();
   const closeModal=()=>{
    setIsOpen(false)
   }
    const[value,setValue]=useState({
        startDate: new Date(car?.from),
        endDate: new Date(car?.to),
        key: 'selection',
    })
    const totalDays=parseInt(formatDistance(new Date(car.to),new Date(car.from)).split(' ')[0])
    
    const totalPrice=totalDays * car?.price
    const [bookingInfo,setBookingInfo]=useState({
      passenger:
       {name: user?.displayName,
        email: user?.email,
         image:user?.photoURL},
      owner: car?.owner?.email,
      location : car?.location,
      price: totalPrice,
      to:value.endDate,
      from: value.startDate,
      title: car?.title,
      carId:car?._id,
      image: car?.image

    })
    
  
    return (
        <div className='rounded-xl border-[1px] border-black overflow-hidden bg-white'>
            <div className='flex items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>
                 ${car?.price}
                </div>
                <div className='font-light text-neutral-600'>
                   Day
                </div>
                

            </div>
            <hr />
           <div className='flex justify-center'>
           <Calender value={value} ></Calender>
           </div>
           <hr />
           <div className='p-4'>
            <Button disabled={car.owner.email === user.email || car.booked } onClick={()=>setIsOpen(true)} label={"Rent this Car"}>

            </Button>
            </div>
            <hr />
            <div className='p-4 flex items-center justify-between font-semibold text-lg'>
                <div>
                Total
                </div>
                <div>
                    ${totalPrice}
                </div>

            </div>
            <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo}></BookingModal>
        </div>
    );
};

export default CarReserve;