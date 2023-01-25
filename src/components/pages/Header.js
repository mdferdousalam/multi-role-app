import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">Multi Role App</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/login'>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;