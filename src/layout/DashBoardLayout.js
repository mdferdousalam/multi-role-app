import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../components/hooks/useAdmin';
import useConsultant from '../components/hooks/useConsultant';
import useStudent from '../components/hooks/useStudent';
import UseTitle from '../components/hooks/UseTitle';
import Header from '../components/pages/Header';
import { AuthContext } from '../context/Authprovider/AuthContext';


const DashboardLayout = () => {
    UseTitle('Dashboard')

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isStudent] = useStudent(user?.email)
    const [isConsultant] = useConsultant(user?.email)

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-accent text-xl text-white">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  ">

                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/students">All Students</Link></li>
                                <li> <Link to="/dashboard/consultants">ALL consultants</Link></li>
                                <li> <Link to="/dashboard/admins">ALL Adminss</Link></li>

                            </>
                        }

                        {
                            isStudent &&
                            <>
                                {/* <li><Link to="/dashboard/students">All Sudents</Link></li> */}
                                <li><Link to="/dashboard/consultants">All Consultants</Link></li>

                            </>
                        }

                        {
                            isConsultant &&
                            <>
                                {/* <li><Link to="/dashboard/consultants">All Consultants</Link></li> */}
                                <li><Link to="/dashboard/students">All Students</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;