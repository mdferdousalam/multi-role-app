import React, { useContext } from 'react';
import UseTitle from '../hooks/UseTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider/AuthContext';



const Login = () => {
    UseTitle('Login')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || "/"

    const { userEmail, setuserEmail, setUser, signIn, auth } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value

        const userInfo = {
            email: email,
            password: password,

        }
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
                // navigate(from, { replace: true })

            })
            .catch(error => console.log(error))

        fetch('https://multi-role-server.vercel.app/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.token)
                localStorage.setItem("token", data.token);
                navigate(from, { replace: true })
            })

    };


    return (
        <div>
            <h2 className='text-center text-xl font-bold my-4'>Login</h2>


            <form onSubmit={handleLogin}>
                <div className='flex flex-col text-center mx-auto  w-1/3'>

                    <input className='my-4 border-2 rounded p-2 border-indigo-900' name='email' type="email" placeholder='Email' required />
                    <input className='border-2 mb-4 rounded p-2 border-indigo-900' name='password' type="password" placeholder='Password' required />
                    <input className='border-2 rounded border-indigo-900  hover:bg-indigo-600 hover:text-white text-center mx-auto my-7 w-2/12' type="submit" value="Login" />

                    <p className='text-center'><small>Not registered yet?<Link className='text-indigo-700  hover:bg-indigo-600 hover:text-white font-bold' to='/register'>Create an account</Link></small></p>
                </div>
            </form>
        </div>
    );
};

export default Login;