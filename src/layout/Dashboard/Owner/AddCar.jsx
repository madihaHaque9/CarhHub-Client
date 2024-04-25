
import AddRoomForm from '../../../components/Form/AddCarForm';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { imageUpload } from '../../../api/utils';


import { addCar } from '../../../api/cars';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AddCar = () => {
    const navigate=useNavigate()
    const {user}=useAuth()
    const [loading,setLoading]=useState(false);
    const [uploadButtonText,setUploadButtonText]=useState('Upload Image')
    const [dates,setDates]=useState({
        startDate: new Date(),
        endDate : new Date(),
        key:'selection',

    })
    const handleSubmit=async (e)=>{
        setLoading(true)
        e.preventDefault();
       
        const form= e.target;
        const location=form.location.value;
        const category= form.category.value;
        const title=form.title.value;
        const to=dates.endDate;
        const from=dates.startDate;
        const price=form.price.value;
        const capacity=form.capacity.value;
        const number=form.ownerNumber.value;
        const description=form.description.value;
        const image=form.image.files[0];
        const owner= {
            name:user?.displayName,
            image: user?.photoURL,
            email:user?.email

        }
        const image_url= await imageUpload(image)
        const carData={
           location,
           category,
           title,
           to,
           from,
        
           price,
           capacity,
           number,
           description ,
           owner,
           image: image_url?.data?.display_url,
        }
try{
    
    const data= await addCar(carData)
    console.log(data)
    setUploadButtonText("Uploaded")
    toast.success("Car has been added")
    navigate('/dashboard/my-listings')
   
}
catch(err){
   toast.error(err.message)
}
finally{
    setLoading(false)
}
console.table(carData)


    }
    const handleDates=ranges=>{
        console.log(ranges)
        setDates(ranges.selection)
        console.log(ranges.selection)


    }
    const handleImageChange=image=>{
        setUploadButtonText(image.name)
    }
    return (
        <div>
            <Helmet>
    <title>Add Car | Dashboard</title>
</Helmet>
            <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} handleImageChange={handleImageChange}
           loading={loading} uploadButtonText={uploadButtonText} ></AddRoomForm>
        </div>
    );
};

export default AddCar;