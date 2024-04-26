import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <>
        <div>{counter}</div>
         <button onClick={increment}>plus {counter}</button>
        </>
    );
}