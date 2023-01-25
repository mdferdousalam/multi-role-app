import React from 'react';
import UseTitle from '../hooks/UseTitle';

import { Link } from 'react-router-dom';




const Login = () => {
    UseTitle('Login')


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
    }

    return (
        <div>
            <h2 className='text-center text-xl font-bold my-4'>Login</h2>


            <h5 className='mx-auto text-center text-indigo-600 mt-6 font-medium'>---------------------------------or----------------------------------------</h5>
            <form onSubmit={handleLogin}>
                <div className='flex flex-col text-center mx-auto  w-1/3'>

                    <input className='my-4 border-2 rounded p-2 border-indigo-900' name='email' type="email" placeholder='Email' required />
                    <input className='border-2 mb-4 rounded p-2 border-indigo-900' name='password' type="password" placeholder='Password' required />


                    <input className='border-2 rounded border-indigo-900  hover:bg-indigo-600 hover:text-white text-center mx-auto my-7 w-2/12' type="submit" value="Login" />

                    <Link  ><p className='text-center '><small className='text-indigo-700 font-bold  hover:bg-indigo-600 hover:text-white'>Forgot your password?</small></p></Link>
                    <p className='text-center'><small>Not registered yet?<Link className='text-indigo-700  hover:bg-indigo-600 hover:text-white font-bold' to='/register'>Create an account</Link></small></p>
                </div>
            </form>
        </div>
    );
};

export default Login;