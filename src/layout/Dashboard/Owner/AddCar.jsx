import React from 'react';
import AddRoomForm from '../../../components/Form/AddCarForm';
import { Helmet } from 'react-helmet';

const AddCar = () => {
    const handleSubmit=()=>{
        console.log('hello')
    }
    return (
        <div>
            <Helmet>
    <title>Add Car | Dashboard</title>
</Helmet>
            <AddRoomForm handleSubmit={handleSubmit}></AddRoomForm>
        </div>
    );
};

export default AddCar;