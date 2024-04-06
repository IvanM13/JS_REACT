import React from 'react';

function BorderCopm({children}) {
    return ( 
        <div style={{border: '2px solid #000', padding: '16px'}}>
            {children}
        </div>
     );
}

export default BorderCopm;