import React from 'react';

function CurrentTime() {
    const time = new Date;
    return ( 
    <div>
        <h2> Текущее время: {time.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"} )}</h2>
        <h2>Дата: {time.toLocaleDateString("en-GB")}</h2>
    </div> );
}

export default CurrentTime;
