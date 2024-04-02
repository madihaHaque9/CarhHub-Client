
import { MdElectricCar } from "react-icons/md";
import { AiFillDislike } from "react-icons/ai";
import { MdElectricRickshaw } from "react-icons/md";
import { TbScooterElectric } from "react-icons/tb";
import { IoCarSportSharp } from "react-icons/io5";
import { MdOutlineCompare } from "react-icons/md";



import { IoDiamond } from 'react-icons/io5'


export const categories = [
  {
    label: 'Old',
    icon: AiFillDislike,
    description: 'This car is bit old!',
  },
  {
    label: 'New',
    icon: MdElectricRickshaw,
    description: 'This car is new!',
  },
  {
    label: 'Compact',
    icon: TbScooterElectric,
    description: 'This car is compact!',
  },
  {
    label: 'Electric',
    icon: MdElectricCar,
    description: 'This is electric car!',
  },
  
  {
    label: 'Luxury',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!',
  },
  {
    label: 'Eco-Friendly',
    icon: MdOutlineCompare,
    description: 'This property is brand new and luxurious!',
  },
  {
    label: 'Sports',
    icon: IoCarSportSharp,
    description: 'This property is brand new and luxurious!',
  }
]