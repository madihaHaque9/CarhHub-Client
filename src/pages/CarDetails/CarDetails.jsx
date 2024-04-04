import { useLoaderData } from "react-router-dom";
import Container from "../../NavBar/Container";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import CarInfo from "./CarInfo";
import Calender from "./Calender";
import { Calendar } from "react-date-range";
import CarReserve from "./CarReserve";


const CarDetails = () => {
    const car=useLoaderData();
    
    
   

   
    return <Container>
<Helmet>
    <title>{car?.title}</title>
</Helmet>
<div className="max-w-screen-lg mx-auto">
    <div className="flex flex-col gap-6"><Header  car={car}></Header></div>
    <div className="grid grid-cols-1 md:grid-cols-7 mt-6">
        <CarInfo car={car}></CarInfo>
        <div className="md:col-span-3 order-first md:order-last mb-10">
        <CarReserve car={car}></CarReserve>
        </div>

    </div>

</div>
    </Container>
};

export default CarDetails;