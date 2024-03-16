import React from "react";

function Card({ title, children}) {
    return ( 
        <div style={{ border: '1px solid #ccc', padding: '16px', marginBlottom: '16px' }}>
            <h2>{title}</h2>
            <p>Reclama tetxt</p>
            {children}
        </div>
     );
}

export default Card;