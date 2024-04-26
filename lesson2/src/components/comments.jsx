import React, { useState } from 'react';

function Comments() {
    const [inputText, setInputText] = useState("");
    const [comments, setComments] = useState([
        "Это первый комментарий",
        "Это второй комментарий",
        "Это третий комментарий"
    ]);

    function clickHandler(){
        if (!inputText.trim()) {
            return;
        }
        setComments([ ...comments, inputText]);
        setInputText("");
    }

    return (
        <>
            <label htmlFor="input">Введите коментарий: </label>
            <input 
                onChange={(event) => setInputText(event.target.value)}
                type="text"
                id="input"
                value={inputText} 
                maxLength={50}>
            </input>
            <button onClick={clickHandler}>Click to add</button>
            <ul>
                {comments.map((item) => {
                    <li key={comments.indexOf(item)}>{item}</li>
                })}
            </ul>
        </>
    );
}

export default Comments;