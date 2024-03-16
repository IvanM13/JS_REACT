import React from 'react';
import { Link } from "react-router-dom";

function ArticleList({ articles }) {
    return (
        <div>
            <h2>Список статей:</h2>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <Link to={`/articles/${article.id}`}></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleList;