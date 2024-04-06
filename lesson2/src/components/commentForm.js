import React, { useState } from "react";

const CommentForm = () => {
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Comment: ", comment);
        setComment("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit">Добавить комментарий</button>
            </form>
            <div>
                {comment.map((item) => (
                    <p value={comment.indexOf(item)}>{item}
                    </p>
                ))}
            </div>
        </div>

    );
};

export default CommentForm;
