import React from 'react';
import './button.css'

function Button( {text, onClickHandler} ) {
    return(
        <button class = "parentButton" onClick={onClickHandler}>
            {text}
        </button>
        );
    }

export default Button;