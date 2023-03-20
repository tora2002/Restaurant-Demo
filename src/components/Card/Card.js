import React from 'react';
import './Card.css'

function Card( {content} ) {
    return (
        <div className="card">
            {content}
        </div>
    );
}

export default Card;