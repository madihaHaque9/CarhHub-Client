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
import OwnerRoute from "./OwnerRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/Admin/ManageUsers";
import Profile from "../layout/Dashboard/Common/Profile";
import MyBookings from "../pages/Passenger/MyBookings";
import ManageBookings from "../layout/Dashboard/Owner/ManageBookings";
import Statistics from "../layout/Dashboard/Common/Statistics";



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
          index: true,
          element: (
            <PrivateRoute>
              <Statistics />
            </PrivateRoute>
          ),
        },
        {
          path:'add-car',
          element:<PrivateRoute><OwnerRoute><AddCar></AddCar></OwnerRoute></PrivateRoute>
        },
        {
          path:'my-listings',
          element:<PrivateRoute><OwnerRoute><MyListings></MyListings></OwnerRoute></PrivateRoute>
        },
        {
          path:'manage-users',
          element:<PrivateRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute></PrivateRoute>
        },
        {
          path:'profile',
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path:'my-bookings',
          element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        },
        {
          path:'manage-bookings',
          element:<OwnerRoute><ManageBookings></ManageBookings></OwnerRoute>
        }
      ]
    }
  ])