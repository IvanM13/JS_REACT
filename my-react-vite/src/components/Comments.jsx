import React, { useState } from 'react';

export default function Comments() {
    const [inputText, setInputText] = useState("");
    const [comments, setComments] = useState([
        "hello",
        "world"
    ]);

    const clickHandler = () => {
        if (!inputText.trim()) {
            return;
        }
        setComments([ ...comments, inputText]);
        setInputText("");
    }

    const deleteComment = (id) => {
        const updatedComments = comments.pop();
        setComments(updatedComments)
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
                {comments.map((item) => (
                    <li key={comments.indexOf(item)}>{item}</li>
                ))}
                <button onClick={deleteComment}>delete comment</button>
            </ul>
        </>
    );
}