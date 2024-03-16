import React, { useState } from "react";

function ParentCounter() {

    const [count, setCount] = useState(0);
    console.log('parent');
    const upCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Родитель</h2>
            <ChildCount count={count}/>
            <button onClick={upCount}>Плюс 1</button>
        </div>
    );
}

function ChildCount({ count }) {
    console.log('click')
    return (
    <div>
        <p>Счетнчик внутри</p>
        <p> Значение счетчика {count} </p>
    </div>);
}

export default ParentCounter;
