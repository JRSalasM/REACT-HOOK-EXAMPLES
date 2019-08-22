import React, { useState, useEffect } from 'react'

export default function EfectoHook() {
    
    const [count, setCount] = useState(1);
    const [name, setName] = useState('A');

    useEffect(() => {
        console.log('Efecto apply');
        document.title = `Clicked # ${count}`;
    });

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>EFECT HOOK</button>
            <button onClick={() => setName('B')}>{name}</button>
        </div>
    )
}
