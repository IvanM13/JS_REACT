import React, { useState } from "react";

function TextInput() {
    const [txt, setTxt] = useState();

    const getTxt = ({target}) =>{
        setTxt(target.value);
    };
    return ( 
        <div>
            <input type="text" value={txt} onChange={getTxt} maxLength="10"/>
                <p>You entered: {txt}</p>
        </div>
     );
}

export default TextInput;