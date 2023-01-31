import { useEffect, useState } from "react"

const useConsultant = email => {
    const [isConsultnt, setisConsultnt] = useState(false);
    const [isConsultntLoading, setisConsultntLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://multi-role-server.vercel.app/users/consultant?email=${email}`, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setisConsultnt(data.isConsultant);
                    setisConsultntLoading(false);
                })
        }
    }, [email])
    return [isConsultnt, isConsultntLoading]
}

export default useConsultant;