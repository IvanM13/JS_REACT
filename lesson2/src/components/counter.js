import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const update = () =>{
        setCount(count + 1);
    }

    return ( 
        <div>
            <span>{count}</span>
            <button onClick={update}>click +1</button>
        </div>
     );
}

export default Counter;