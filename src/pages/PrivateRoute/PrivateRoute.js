import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
      const location = useLocation();
    
      if(loading){

          return <div className='text-2xl'> Loading...</div>
      }
      
  if(!user){
     
     return <Navigate to="/signIn" state={{ from: location }} replace> </Navigate>
       
  }

   return children; 
};

export default PrivateRoute;