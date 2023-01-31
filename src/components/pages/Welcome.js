import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider/AuthContext';
import useAdmin from '../hooks/useAdmin';
import useConsultant from '../hooks/useConsultant';
import useStudent from '../hooks/useStudent';
import UseTitle from '../hooks/UseTitle';


const Welcome = () => {
    UseTitle('Welcome Dashboard')
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isStudent] = useStudent(user?.email)
    const [isConsultant] = useConsultant(user?.email)
    return (
        <div>
            {
                isAdmin && <>
                    <h1 className='text-4xl text-center text-primary mt-64'>Welcome to your Admin Dashboard</h1>
                </>
            }
            {
                isStudent && <>
                    <h1 className='text-4xl text-center text-primary mt-64'>Welcome to your Student Dashboard</h1>
                </>
            }
            {
                isConsultant && <>
                    <h1 className='text-4xl text-center text-primary mt-64'>Welcome to your Consultant Dashboard</h1>
                </>
            }
        </div>
    );
};

export default Welcome;