
import axiosSecure from "."

export const getAllCars= async ()=>{
    const {data}=await axiosSecure('/cars')
    return data
}
export const getCar= async (id)=>{
    const {data}=await axiosSecure(`/car/${id}`)
    return data
}
