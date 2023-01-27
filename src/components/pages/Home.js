
import React from 'react';
import UseTitle from '../hooks/UseTitle';
// import ConsultantsTable from './codes';

const Home = () => {
    const user = {}
    UseTitle('Home')
    return (
        <div>
            {
                user?.uid ? <h1 className='text-center text-4xl font-bold my-96 text-indigo-900'>To see the data please login...</h1> : <p>LogIn</p>
            }
        </div>
    );
};

export default Home;