import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import CarDetails from "../pages/CarDetails/CarDetails";

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
          element:<CarDetails></CarDetails>
        }
      ],
    },
    { path: '/login', element: <Login></Login> },
    { path: '/signup', element: <SignUp></SignUp> },
  ])