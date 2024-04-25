import { useContext, useState } from 'react';
import { GrLogout } from 'react-icons/gr';
import { FcSettings } from 'react-icons/fc';
import { AiOutlineBars } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import Logo from './Logo';
import MenuItem from './MenuItem';
import ToggleBtn from '../../components/Button/ToggleBtn';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useRole from '../../hooks/useRole';
import OwnerMenu from './OwnerMenu';
import AdminMenu from './AdminMenu';
import PassangerMenu from './PassangerMenu';

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState(false);
  const [role] = useRole();
  const { user } = useAuth();

  const toggleHandler = event => {
    setToggle(event.target.checked);
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className='bg-gray-800 md:bg-transparent flex justify-between md:hidden text-white'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-black'
        >
          <AiOutlineBars className='h-5 w-5 text-white' />
        </button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden text-white bg-red-700 w-64 space-y-6 px-4 py-6 md:py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
              <Logo />
            </div>
          </div>

          <div className='flex flex-col justify-between flex-1 mt-6'>
            {role === 'owner' && <ToggleBtn toggleHandler={toggleHandler} />}
            <nav>
              <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
              />
              {role === 'passenger' && <PassangerMenu />}
              {role === 'owner' ? (
                toggle ? (
                  <OwnerMenu />
                ) : (
                  <PassangerMenu />
                )
              ) : (
                ''
              )}
              {role === 'admin' && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr className='border-gray-600' />
          <MenuItem
            icon={FcSettings}
            label='Profile'
            className='text-white'
            address='/dashboard/profile'
          />
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-600 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />
            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
