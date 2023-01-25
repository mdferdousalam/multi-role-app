import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import UseTitle from '../hooks/UseTitle';

const Register = () => {
    UseTitle('Register')





    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || "/"

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const imageURL = form.imageURL.value
        console.log(name, email, password, imageURL);

        const userInfo = {
            displayName: name,
            email: email,
            password: password,
            photoURL: imageURL
        }



        // user info send to database via server

        fetch('https://b6a11-service-review-server-side-seven.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert("User registration success")
                    event.target.reset()
                }
            })



    }



    return (
        <div>
            <h2 className='text-center text-xl font-bold my-4'>Register Here</h2>
            <form onSubmit={handleRegister}>
                <div className='flex flex-col text-center mx-auto  w-1/3'>
                    <input className='border-2 rounded p-2 border-indigo-900' name='name' type="text" placeholder='Enter Your Full Name' required />
                    <input className='my-4 border-2 rounded p-2 border-indigo-900' name='email' type="email" placeholder='Email' required />
                    <input className='border-2 mb-4 rounded p-2 border-indigo-900' name='password' type="password" placeholder='Password' required />
                    <select className='border-2 mb-4 rounded p-2 border-indigo-900' required >
                        <option selected value="volvo">Please Choose your role</option>
                        <option value="volvo">Student</option>
                        <option value="saab">Consultant</option>
                        <option value="mercedes">Admin</option>
                    </select>
                    <input className='border-2 rounded border-indigo-900  hover:bg-indigo-600 hover:text-white text-center mx-auto my-7 w-2/12' type="submit" value="Submit" />
                </div>
                <p className='text-center'><small>Already have an account?<Link className='text-indigo-700 hover:bg-indigo-600 hover:text-white font-bold' to='/login'>Login</Link></small></p>
            </form>

        </div>
    );
};

export default Register;