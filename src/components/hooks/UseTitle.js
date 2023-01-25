import { useEffect } from 'react'
const UseTitle = title => {
    useEffect(() => {
        document.title = `${title}-Multi Role app`
    }, [title])
}


export default UseTitle;