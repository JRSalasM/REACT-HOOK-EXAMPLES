import React, { useState } from 'react'

export default function ButtonHook() {
    const [buttonText,setButtonText] = useState("Click me");
    function hadleClick(){
        return setButtonText("Click con hook");
    }
    return (
        <button onClick={hadleClick}>
            {buttonText}
        </button>
    )
}
