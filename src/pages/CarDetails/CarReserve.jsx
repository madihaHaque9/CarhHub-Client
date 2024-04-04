/* eslint-disable react/prop-types */


import Calender from './Calender';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { formatDistance } from 'date-fns';


const CarReserve = ({car}) => {
    console.log(car);
   
    const[value,setValue]=useState({
        startDate: new Date(car?.from),
        endDate: new Date(car?.to),
        key: 'selection',
    })
    const totalDays=parseInt(formatDistance(new Date(car.to),new Date(car.from)).split(' ')[0])
    
    const totalPrice=totalDays * car?.price
  
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
            <Button label={"Rent this Car"}>

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
        </div>
    );
};

export default CarReserve;