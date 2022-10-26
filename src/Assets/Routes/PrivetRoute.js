import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useLocation,Navigate  } from 'react-router-dom';
const PrivetRoute = ({children}) => {

    const {user} = useContext(AuthContext)
    const location = useLocation()
    
    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
   
};

export default PrivetRoute;