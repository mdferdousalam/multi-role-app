import React, { useEffect, useState } from 'react';
import Consultantinfo from './Consultantinfo';

const AllConsultants = () => {

    const [consultants, setConsultants] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [consultantsPerPage] = useState(5);
    // const [total, setTotal] = useState(0)
    // const pages = Math.ceil(total / consultantsPerPage)
    const pages = Math.ceil(consultants?.length / consultantsPerPage)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('https://multi-role-server.vercel.app/users/consultants', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`,
                    },
                });
                if (!res.ok) {
                    throw new Error(`Request failed with status code ${res.status}`);
                }
                const data = await res.json();
                setConsultants(data);


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
        return <div>An error occurred while fetching the consultants data</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!consultants) {
        return null;
    }



    // Get current consultants
    const indexOfLastConsultant = currentPage * consultantsPerPage;
    const indexOfFirstConsultant = indexOfLastConsultant - consultantsPerPage;
    const currentConsultants = consultants.slice(indexOfFirstConsultant, indexOfLastConsultant);



    return (
        <div className="overflow-x-auto w-full">
            <table className="table  w-full" >

                <thead>
                    <tr>
                        <th> Serial Number </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {currentConsultants.map((consultant, index) => (
                        <Consultantinfo
                            key={consultant._id}
                            consultant={consultant}
                            index={indexOfFirstConsultant + index}
                        />
                    ))}
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


        </div >
    );


};

export default AllConsultants;