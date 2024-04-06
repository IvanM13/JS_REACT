import React, { useState } from 'react';

const CommentsList = () => {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const deleteComment = (id) => {
        const updatedComments = comments.filter((comment) => comment.id !== id)
        setComments(updatedComments)
    }

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p> {comment.id}: {comment.text} </p>
                    <button onClick={() => deleteComment(comment.id)}>delete comment</button>
                </div>
            ))}
        </div>
    )
}
export default CommentsList
