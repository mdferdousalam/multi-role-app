import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider/AuthContext';


const Header = () => {



    const { logOut, user } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem("token");
                navigate('/home')
            })
            .catch((error) => console.error(error))
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/home' className="btn btn-ghost normal-case text-xl font-bold text-indigo-900 hover:bg-indigo-600 hover:text-white">Multi Role App</Link>
                </div>
                <div className="flex-none">


                    {
                        user?.uid ?
                            <>
                                <div className='flex justify-evenly  '>
                                    <button className="btn btn-ghost hover:bg-indigo-600 text-xl hover:text-white">

                                        <Link className='text-indigo-900 text-xl font-bold'>  <button onClick={handleLogOut}>Logout</button></Link>
                                    </button>
                                    <button className="btn btn-ghost content-center btn-circle">
                                        <div className="avatar online">
                                            <div className="w-24 rounded-full">
                                                {
                                                    user?.photoUrl ? <img src={user?.photoURL} title={user?.displayName} alt="" /> : <img src={user?.photoURL} title={user?.displayName} alt="" />
                                                }
                                            </div>
                                        </div>
                                    </button>
                                </div>

                            </>
                            :
                            <>
                                <button className="btn btn-ghost font-bold hover:bg-indigo-600 hover:text-white">

                                    <Link to='/login' className='text-indigo-900 text-xl font-bold'>Sign In</Link>
                                </button>
                                {/* <button className="btn btn-ghost font-bold hover:bg-indigo-600 hover:text-white">
                                    <Link to='/register' className='text-indigo-900 text-xl font-bold'>Register</Link>

                                </button> */}
                            </>
                    }


                </div>
            </div>
        </div>
    );
};


export default Header;