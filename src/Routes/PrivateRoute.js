import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import * as Loader from "react-loader-spinner";
import { AuthContext } from '../context/Authprovider/AuthContext';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return < Loader.RotatingLines strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    return children
};

export default PrivateRoute;