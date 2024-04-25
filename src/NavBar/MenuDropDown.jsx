import  { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import avatarImg from '../assets/avatar/placeholder.jpg'
import HostModal from '../components/Modal/components/Modal/HostRequestModal';
import { becomeOwner } from '../api/auth';
import toast from 'react-hot-toast';
import useRole from '../hooks/useRole';

const MenuDropDown = () => {
  const { user,logOut } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const [role]=useRole();
    const [isModalOpen,setIsModalOpen]= useState(false)
    const closeModal=()=>{
      setIsModalOpen(false)
    }
    const modalHandler =async ()=>{
      try{
    const data = await becomeOwner(user?.email)
    console.log(data)
    if(data.modifiedCount>0){
       toast.success("Request is pending. Wait for the admin's approval")
    }
    else{
       toast.success("wait for the approval")
    }
      }
      catch(err){
       console.log(err)
      }
      finally{
        setIsModalOpen(false)
      }
     }
 
    return (
        <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
          {/* Become A owner btn */}
          <div className='hidden md:block'>
            {
              (!user || !role || role ==='passenger' ) && (
                <button onClick={()=>setIsModalOpen(true)} disabled={!user} className='text-white disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition'>
              Rent Your Car
            </button>
              )
            }
          </div>
          {/* Dropdown btn */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
          >
            <AiOutlineMenu />
            <div className='hidden md:block'>
              {/* Avatar */}
              <img
                className='rounded-full'
                referrerPolicy='no-referrer'
                src={user && user.photoURL ? user.photoURL : avatarImg}
                alt='profile'
                height='30'
                width='30'
              />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
            <div className='flex flex-col cursor-pointer'>
              <Link
                to='/'
                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
              >
                Home
              </Link>
  {user?<>
  
    <Link
                to='/dashboard'
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
              >
                Dashboard
              </Link>
              <div onClick={logOut}
               
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
              >
                Logout
              </div>
  </>:<>
  
  <Link
                to='/login'
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
              >
                Login
              </Link>
              <Link
                to='/signup'
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
              >
                Sign Up
              </Link>
  </>}
            </div>
          </div>
        )}
        <HostModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler} ></HostModal>
      </div>
    );
};

export default MenuDropDown;