import React, { useEffect, useState } from 'react';
import Studentinfo from './StudentInfo';





const AllStudents = () => {

    const [students, setStudents] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage] = useState(5);
    const pages = Math.ceil(students?.length / studentsPerPage)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('https://multi-role-server.vercel.app/users/students', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`,
                    },
                });
                if (!res.ok) {
                    throw new Error(`Request failed with status code ${res.status}`);
                }
                const data = await res.json();
                setStudents(data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (error) {
        console.error(error);
        return <div>An error occurred while fetching the students data</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!students) {
        return null;
    }


    // Get current students
    const indexOfLastConsultant = currentPage * studentsPerPage;
    const indexOfFirstConsultant = indexOfLastConsultant - studentsPerPage;
    const currentStudents = students.slice(indexOfFirstConsultant, indexOfLastConsultant);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table  w-full">
                <thead>
                    <tr>
                        <th> SL </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentStudents?.map((student, index) => <Studentinfo
                            key={student._id}
                            student={student}
                            index={index}
                        ></Studentinfo>)
                    }
                </tbody>
            </table>
            <div className='mx-auto'>
                <p className=' text-indigo-900 ml-72 mt-10'>currently selected page: {currentPage}</p>
                {

                    [...Array(pages).keys()].map(number => <button

                        className='mt-12 px-2 text-primary hover:text-white hover:bg-indigo-900 font-bold ml-12 border border-indigo-900'
                        key={number}
                        onClick={() => setCurrentPage(number)}
                    >
                        {console.log([...Array(pages).keys()])}
                        {number}
                    </button>)

                }
            </div>
        </div>
    );


};

export default AllStudents;