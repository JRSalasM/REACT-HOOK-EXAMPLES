import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState([]);
    console.log(url);
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
        });
    }, []);
    return data;
}
 