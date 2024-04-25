

import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../NavBar/Loader/' 
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location=useLocation();
    if(loading) return <Loader></Loader>
    if(user) return children
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;