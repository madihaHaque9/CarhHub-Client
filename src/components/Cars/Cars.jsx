import { useEffect, useState } from "react";
import Cards from "./Cards";
import Container from "../../NavBar/Container";
import { useSearchParams } from "react-router-dom";
import { getAllCars } from "../../api/cars";


const Cars = () => {
    const [cars,setCars]=useState([]);
    const [params,setParams]=useSearchParams();
    const category=params.get('category')
    useEffect(()=>{
        getAllCars()
       
        .then(data=>{
            if(category){
                const filter=data.filter(car=>car.category === category)
                setCars(filter)
            }
            else setCars(data)
        })

    },[category])
    return (
       <Container>
         <div className="mt-4">
        <div className="text-center" >
            
            <h2 className="text-5xl text-center text-red-700 font-bold mt-6"> Our Featured Cars</h2>
            <br />
            <p className="text-black text-xl">Find Your Next Car to Rent for a day!</p>
            <br />

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
            cars.map(car=><Cards key={car._id} car={car}></Cards>)
           }
        </div>
    </div>
       </Container>
    );
};

export default Cars;