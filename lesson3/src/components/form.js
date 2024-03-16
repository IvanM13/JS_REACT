import React, { useState, useEffect } from 'react';

const InputForm = () => {
    const [inpuValue, setInpuValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    useEffect(() => {
        console.log('Input value changed:', inpuValue);
    }, [inpuValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inpuValue);
        setInpuValue('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={inpuValue}
                onChange={(e) => setInpuValue(e.target.value)}
                />
                <button type="submit">Submit</button>
                </form>
                    {submittedValue && <p>Submitted value: {submittedValue}</p>}
        </div>
    )
     
}

export default InputForm;
