/* eslint-disable react/prop-types */
import React from 'react';

const CarInfo = ({car}) => {
    return (
       
             <div className='col-span-4 flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <div
          className='
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            '
        >
          <div className='text-red-700'>Owned by {car?.owner?.name}</div>

          <img
            className='rounded-full'
            height='30'
            width='30'
            alt='Avatar'
            src={car?.owner?.image}
          />
        </div>
        <div
          className='
              
              gap-4 
              
              font-medium text-xl mt-2
            '
        >
          <div>Price: $  {car?.price} </div>
          <div>Capacity: {car?.capacity} </div>
          <div>Category: {car?.category} </div>
          <div>Contact:  {car?.renter_phone} </div>
        </div>
      </div>

      <hr />
      <div
        className='
        text-lg font-medium text-neutral-500'
      >
        {car.description}
      </div>
      <hr />
    </div>
        
    );
};

export default CarInfo;