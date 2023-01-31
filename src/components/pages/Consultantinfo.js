import React from 'react';


const Consultantinfo = ({ consultant, index }) => {





    return (
        <tr className='text-primary'>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="font-bold">{consultant.DisplayName}</div>
            </td>
            <td>
                {consultant.email}

            </td>

            <th>
                {consultant.role}
            </th>
        </tr>
    );
};

export default Consultantinfo;