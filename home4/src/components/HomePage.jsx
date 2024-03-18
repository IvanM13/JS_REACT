import React from 'react';

function HomePage({ articles }) {
    return (
        <div>
            <h1>{articles}</h1>
            <a href="tel:+79999999999">+7-999-999-99-99</a>
        </div>
    );
}

export default HomePage;