import React from 'react';


const Studentinfo = ({ student, index }) => {





    return (
        <tr className='text-primary'>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="font-bold">{student.DisplayName}</div>
            </td>
            <td>
                {student.email}

            </td>

            <th>
                {student.role}
            </th>
        </tr>
    );
};

export default Studentinfo;