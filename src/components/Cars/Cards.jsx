/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Cards = ({car}) => {
    return (
        <Link to={`/car/${car?._id}`} className='cursor-pointer group'>
          <div className='flex flex-col gap-2 w-full'>
            <div
              className='
                  aspect-square 
                  w-full 
                  relative 
                  overflow-hidden 
                  rounded-xl
                '
            >
              <img
                className='
                    object-cover 
                    h-full 
                    w-full 
                    group-hover:scale-110 
                    transition
                  '
                src={car?.image}
                alt='Car'
              />
              <div
                className='
                  absolute
                  top-3
                  right-3
                '
              ></div>
            </div>
            <div className='font-semibold text-lg'>{car?.title}</div>
           
            <div className='flex flex-row items-center gap-1'>
              <div className='font-semibold'>$ {car?.price}</div>
              <div className='font-light'>Day</div>
            </div>
          </div>
        </Link>
      )
};

export default Cards;