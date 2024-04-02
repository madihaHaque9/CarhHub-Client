import { useParams } from "react-router-dom";
import Container from "../../NavBar/Container";
import { useEffect, useState } from "react";
import loader from '../../NavBar/Loader'

const CarDetails = () => {
    const [car,setCars]=useState({});
    
    const {id}=useParams();
    useEffect(()=>{
        fetch('./cars.json')
        .then(res=>res.json())
        .then(data=>{
           const singleCar=data.find(car=>car._id===id)
           setCars(singleCar);
        })

    },[id])

   
    return <Container>
{car?.title}
    </Container>
};

export default CarDetails;