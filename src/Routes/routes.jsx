import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import CarDetails from "../pages/CarDetails/CarDetails";
import PrivateRoute from "./PrivateRoute";
import { getCar } from "../api/cars";
import DashboardLayout from "../layout/Dashboard/Dashboard";
import AddCar from "../layout/Dashboard/Owner/AddCar";
import MyListings from "../layout/Dashboard/Owner/MyListings";



export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          
        },
        {
          path:'/car/:id',
          element:<PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
          loader:({params})=>getCar(params.id)
        
        },
        
      ],
    },
    { path: '/login', element: <Login></Login> },
    { path: '/signup', element: <SignUp></SignUp> },
    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path:'add-car',
          element:<AddCar></AddCar>
        },
        {
          path:'my-listings',
          element:<MyListings></MyListings>
        },
      ]
    }
  ])