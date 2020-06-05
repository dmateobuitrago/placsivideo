import {useEffect, useState} from 'react'

const useInitialState = (API) => {

    const [data, setData] = useState({
        mylist: [],
        trends: [],
        originals: [],
    })


    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setData(data))
    }, []);

    return data
}

export default useInitialState