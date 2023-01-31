
import React, { useContext } from 'react';

import { AuthContext } from '../../context/Authprovider/AuthContext';
import UseTitle from '../hooks/UseTitle';

const Home = () => {
    UseTitle('Home')
    const { user } = useContext(AuthContext)

    return (
        <div>
            {

                user?.uid ?

                    <h1 className='text-center text-4xl font-bold my-72 text-indigo-900'>Go to Dashboard</h1>

                    : <h1 className='text-center text-4xl font-bold my-72 text-indigo-900'>To see the data please login...</h1>
            }

        </div>
    );
};

export default Home;