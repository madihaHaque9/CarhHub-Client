/* eslint-disable react/prop-types */


const CarInfo = ({ car }) => {
  return (
    <div className="col-span-4 flex flex-col gap-8 bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-col gap-4">
        <div className="text-xl font-semibold flex items-center gap-2">
          <span className="text-red-700">Owned by {car?.owner?.name}</span>
          <img
            className="rounded-full h-8 w-8"
            alt="Owner Avatar"
            src={car?.owner?.image}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="font-semibold">Price:</span>
            <span>$ {car?.price}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="font-semibold">Capacity:</span>
            <span>{car?.capacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="font-semibold">Category:</span>
            <span>{car?.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="font-semibold">Contact:</span>
            <span>{car?.renter_phone}</span>
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />
      <div className="text-base font-normal text-gray-700">{car.description}</div>
    </div>
  );
};

export default CarInfo;
