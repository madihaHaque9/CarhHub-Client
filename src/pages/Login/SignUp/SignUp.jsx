
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../../api/utils";
import { TbFidgetSpinner } from "react-icons/tb";


import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { getToken, saveUser } from "../../../api/auth";
import toast from "react-hot-toast";
import img from '../../../assets/bg-image/coupe-1374450_1280.jpg'


const SignUp = () => {
  const {createUser,updateUserProfile,loading,googleSignIn}=useContext(AuthContext);
  const navigate=useNavigate();
  const handleSubmit=async (e)=>{

    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const image=form.image.files[0];
 
   
    try{
      const imageData=await imageUpload(image);
     const result= await createUser(email,password)
     await updateUserProfile(name,imageData?.data?.display_url)
     console.log(result)
     const dbResponse=await saveUser(result?.user);
     console.log(dbResponse)
     await getToken(result?.user?.email)
     navigate('/')
     toast.success("SignedUp Successfully")
    }
    catch(err){
      toast.error(err?.message)
    }


  }
  const handleGoogleSignIn=async()=>{
    try{
    
     const result= await googleSignIn();
     
     
     const dbResponse=await saveUser(result?.user);
     console.log(dbResponse)
     await getToken(result?.user?.email)
     navigate('/')
     toast.success("SignedUp Successfully")
    }
    catch(err){
      toast.error(err?.message)
    }

    
  }
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 bg-cover bg-center' style={{backgroundImage: `url(${img})`}}>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10  text-black'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl text-white font-bold'>Sign Up</h1>
          <p className='text-sm text-white'>Welcome to CarHub</p>
        </div>
        <form onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm text-white'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-transparent text-gray-500'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm text-white'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm text-white'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-transparent text-gray-500'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2 text-white'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-transparent text-gray-500'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-black w-full rounded-md py-3 text-white'
            >
              {loading ? <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner>: 'Continue'}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:black'></div>
          <p className='px-3 text-sm text-white'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-black'></div>
        </div>
        <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer' onClick={handleGoogleSignIn}>
          <FcGoogle size={32} />

          <p className="text-white">Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          
        </p>
      </div>
    </div>
    );
};

export default SignUp;