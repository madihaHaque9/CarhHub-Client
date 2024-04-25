
import MenuItem from './MenuItem';
import { IoAddCircle } from 'react-icons/io5';
import { FaThList } from 'react-icons/fa';
import {MdOutlineManageHistory } from 'react-icons/md';

const OwnerMenu = () => {
    return (
        <>
         <MenuItem
                icon={IoAddCircle}
                label='Add Car'
                address='add-car'
              />
              <MenuItem
                icon={FaThList}
                label='My Car List'
                address='my-listings'
              />   
              <MenuItem
                icon={MdOutlineManageHistory}
                label='Manage Bookings'
                address='manage-bookings'
              />   
        </>
    );
};

export default OwnerMenu;