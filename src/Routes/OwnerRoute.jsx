/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import Loader from '../NavBar/Loader/' 

import useRole from '../hooks/useRole';

const OwnerRoute = ({children}) => {
    
    const [role,isLoading]=useRole();
   
    if(isLoading) return <Loader></Loader>
    if(role === 'owner') return children
    return <Navigate to='/dashboard' ></Navigate>
};

export default OwnerRoute;