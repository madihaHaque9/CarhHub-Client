/* eslint-disable react/prop-types */
import React from 'react';
import Heading from '../../Heading/Heading';

const Header = ({car}) => {
    return (
        <>
        <br />
        <Heading title={car.title} subtitle={car.location} />
        <div className='w-full  md:h-[60vh] overflow-hidden rounded-xl'>
          <img
            className='object-cover w-full h-full '
            src={car.image}
            alt='header image'
          />
        </div>
      </>
    );
};

export default Header;