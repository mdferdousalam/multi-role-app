
import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider/AuthContext';
import UseTitle from '../hooks/UseTitle';
// import ConsultantsTable from './codes';

const Home = () => {
    UseTitle('Home')
    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                user?.uid ? <h1 className='text-center text-4xl font-bold my-96 text-indigo-900'>Successfully Logedin.</h1> : <h1 className='text-center text-4xl font-bold my-96 text-indigo-900'>To see the data please login...</h1>
            }
        </div>
    );
};

export default Home;