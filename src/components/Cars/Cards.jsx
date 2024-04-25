
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Cards = ({ car }) => {
  return (
    <Link to={`/car/${car?._id}`} className="cursor-pointer group">
      <div className="relative w-full">
        <div
          className="
                  aspect-square 
                  w-full 
                  relative 
                  overflow-hidden 
                  rounded-xl
                  transition
                "
        >
          <img
            className="
                    object-cover 
                    h-full 
                    w-full 
                    group-hover:scale-110 
                    transition
                  "
            src={car?.image}
            alt="Car"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50">
            <Link to={`/car/${car?._id}`}>
              <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
                View Details
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-3">
          <div className="bg-black bg-opacity-50 p-2 rounded-lg">
            <div className="font-semibold text-lg text-white">{car?.title}</div>
            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold text-white">$ {car?.price}</div>
              <div className="font-light text-white">Day</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
