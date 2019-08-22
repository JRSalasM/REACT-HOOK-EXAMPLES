import React ,{ useState,useEffect } from 'react';
import useFetch from './HOOKS/useFetch';

export default function Post(props) {
    const [id,setId] = useState(1);
    const url =`https://jsonplaceholder.typicode.com/posts/${id}`
    const data = useFetch(url);
    useEffect(()=>{
        console.log(data);
        //data = useFetch(url);
    })
    return (
        <div>
            <span>{data.id}</span>
            <h1>{data.title}</h1>
            
            <button onClick={() => [setId(id + 1)]}>other post</button>
        </div>
    )
}
