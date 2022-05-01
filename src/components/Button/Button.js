import React from 'react';
import './Button.css';

function Button({ title, disabled }) {
    return (
        <button
            onClick={() => console.log({title})}
            disabled={disabled} >
            {title}
        </button>
    );
}

export default Button;