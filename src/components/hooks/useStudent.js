import { useEffect, useState } from "react"

const useStudent = email => {
    const [isStudent, setisStudent] = useState(false);
    const [isStudentLoading, setisStudentLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://multi-role-server.vercel.app/users/student?email=${email}`, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setisStudent(data.isStudent);
                    setisStudentLoading(false);
                })
        }
    }, [email])
    return [isStudent, isStudentLoading]
}

export default useStudent;