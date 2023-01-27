import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider/AuthContext'
import UseTitle from '../hooks/UseTitle';

const Register = () => {
    UseTitle('Register')

    const { createUser, setUser, updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || "/"

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const role = form.role.value
        console.log(name, email, password, role);

        const userInfo = {
            DisplayName: name,
            email: email,
            password: password,
            role: role
        }


        // User creation 

        createUser(email, password)
            .then(result => {
                const user = result.user;
                const newUser = { ...userInfo }
                setUser(newUser, user)
                handleUpdateUserProfile(name)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err);
            })

        const handleUpdateUserProfile = (name) => {
            const profileInformation = {
                displayName: name,
            }
            updateUserProfile(profileInformation)
                .then(() => { })
                .catch((err) => { })
        }

        // user info send to database via server

        fetch('https://multi-role-server.vercel.app/signup', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.token)
                localStorage.setItem("token", data.token);
                navigate(from, { replace: true })
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
                    <select className='border-2 mb-4 rounded p-2 border-indigo-900' name='role' required >
                        <option defaultValue value="volvo">Please Choose your role</option>
                        <option value="student">Student</option>
                        <option value="consultant">Consultant</option>
                        <option value="admin">Admin</option>
                    </select>
                    <input className='border-2 rounded border-indigo-900  hover:bg-indigo-600 hover:text-white text-center mx-auto my-7 w-2/12' type="submit" value="Submit" />
                </div>
                <p className='text-center'><small>Already have an account?<Link className='text-indigo-700 hover:bg-indigo-600 hover:text-white font-bold' to='/login'>Login</Link></small></p>
            </form>

        </div>
    );
};

export default Register;