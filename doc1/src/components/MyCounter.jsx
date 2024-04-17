import { useState } from "react";

export default function MyCounter() {
    const [count, setCount] = useState(0);

    function handlePlus() {
        setCount(count + 1);
    }

    function handleMinus(){
        setCount(count - 1);
    }

    return (
        <>
        <h3>[{count}]</h3>
        <button onClick={handlePlus}>
            Clicked plus
        </button>
        <button onClick={handleMinus}>
            Clicked minus
        </button>
        </>
        
    )
}