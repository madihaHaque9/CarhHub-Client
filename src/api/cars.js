
import axiosSecure from "."

export const getAllCars= async ()=>{
    const {data}=await axiosSecure('/cars')
    return data
}
export const getOwnerCars=async(email)=>{
    const {data}=await axiosSecure(`/cars/${email}`)
    return data
}
export const getCar= async (id)=>{
    const {data}=await axiosSecure(`/car/${id}`)
    return data
}
export const addCar= async (carData)=>{
    const {data}=await axiosSecure.post('/cars',carData)
    return data
}
