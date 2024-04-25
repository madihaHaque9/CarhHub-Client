
import axiosSecure from "."

export const createPaymentIntent= async (price)=>{
    const {data}=await axiosSecure.post('/create-payment-intent',price)
    return data;
}
export const saveBookingInfo= async paymentInfo=>{
    const {data}=await axiosSecure.post('/bookings',paymentInfo)
    return data;
}
export const updateStatus= async( id,status)=>{
    const {data}=await axiosSecure.patch(`/cars/status/${id}`,{status})
    return data;
}
export const getBookings= async (email)=>{
const {data}=await axiosSecure(`/bookings?email=${email}`)
return data;
}
export const getOwnerBookings= async (email)=>{
    const {data}=await axiosSecure(`/bookings/owner?email=${email}`)
    return data;
}
export const deleteBooking = async id => {
    const { data } = await axiosSecure.delete(`/bookings/${id}`)
    return data
  }