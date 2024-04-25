/* eslint-disable react/prop-types */
const ToggleBtn = ({ toggleHandler }) => {
  return (
    <>
      <label
        htmlFor='Toggle3'
        className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-white'
      >
        <input
          onChange={toggleHandler}
          id='Toggle3'
          type='checkbox'
          className='hidden peer'
        />
        <span className='px-4 py-1 rounded-l-md bg-red-500 peer-checked:bg-red-700'>
          Car Rental
        </span>
        <span className='px-4 py-1 rounded-r-md bg-red-700 peer-checked:bg-red-500'>
          Car Owner
        </span>
      </label>
    </>
  );
};

export default ToggleBtn;
