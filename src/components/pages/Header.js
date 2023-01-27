import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {


    const handleLogout = () => {
        fetch('https://multi-role-server.vercel.app/logout')
            .then(res => res.data)
            .then(data => {
                console.log(data)
                if (data.success) {
                    // clear any user data or local storage
                    // localStorage.removeItem('token');
                    // this.props.history.push('/');
                }
            });
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/home' className="btn btn-ghost normal-case text-xl font-bold text-indigo-900">Multi Role App</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/login' className='text-indigo-900 text-xl font-bold'>Sign In</Link>
                            <Link className='text-indigo-900 text-xl font-bold'>  <button onClick={handleLogout}>Logout</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Header;