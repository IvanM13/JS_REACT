import { children } from 'react';

function Box({ children }) {
    return ( 
        <div
        style={
            {border: '1px solid black',
            width: 200,
            height: 100
        }}>
            { children }
        </div>
     );
}

export default Box;