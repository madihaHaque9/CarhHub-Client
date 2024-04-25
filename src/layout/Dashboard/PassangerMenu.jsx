
import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'

import MenuItem from './MenuItem'
import useRole from '../../hooks/useRole'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import HostModal from '../../components/Modal/components/Modal/HostRequestModal'
import { becomeOwner } from '../../api/auth'
import toast from 'react-hot-toast'
const PassangerMenu = () => {
  const [role] = useRole()
  const {user}=useAuth();
  const [isOpen,setIsOpen]=useState(false)
  const closeModal=()=>{
    setIsOpen(false)
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
    setIsOpen(false)
   }
  }
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label='My Bookings'
        address='my-bookings'
      />

      {role === 'passenger' && (
        <div onClick={()=>setIsOpen(true)} className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Wanna Give Your Car on Rent?</span>
        </div>
      )}
      <HostModal closeModal={closeModal} isOpen={isOpen} modalHandler={modalHandler}></HostModal>
    </>
  )
}

export default PassangerMenu