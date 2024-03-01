import React, { useState } from 'react';

function Comments() {
    const [inputText, setInputText] = useState("");
    const [comments, setComments] = useState([
        "Это первый комментарий",
        "Это второй комментарий",
        "Это третий комментарий"
    ]);

    const clickHandler = () => {
        if (!inputText.trim()) {
            return;
        }
        setComments([...comments, inputText]);
        setInputText("");
    }

    function foo() {
        return comments.pop();
    }

    return (
        <div>
            <label htmlFor="input">Введите коментарий: </label>
            <input onChange={event => setInputText(event.target.value)}
                type="text"
                id="input"
                value={inputText} maxLength="10"></input>
            <button onClick={clickHandler}>Click to add</button>

        </div>
    );
}

export default Comments;