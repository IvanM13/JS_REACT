import React from 'react';

function Message(props) {
    return ( 
        <div>
            <h1 style={{ color: (props.name.length === 3) ? 'green' : 'red'}}>Hello, {props.name}!!</h1>
        </div>
     );
}

export default Message;