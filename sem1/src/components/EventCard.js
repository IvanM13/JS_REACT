import React from 'react';

function EventCard(props) {
        let tema = 2;
        return ( 
          <div>
            <h2 style={{ color: (0 === props.number % tema) ? 'green' : 'red'}}>Статья {props.number} про {props.name}</h2>
            <a href='#'>Читать статью</a>
          </div>
         );
}

export default EventCard;