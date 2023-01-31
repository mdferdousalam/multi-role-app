import React from 'react';


const Admininfo = ({ admin, index }) => {





    return (
        <tr className='text-primary'>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="font-bold">{admin.DisplayName}</div>
            </td>
            <td>
                {admin.email}

            </td>

            <th>
                {admin.role}
            </th>
        </tr>
    );
};

export default Admininfo;