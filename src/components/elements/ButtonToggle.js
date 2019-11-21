import React from 'react';
import './elements.css';

const ButtonToggle = ({text, active, onClick, toggleMode}) => {

    return (
        <button 
            className={active ? "button-toggle active" : "button-toggle"} 
            onClick={onClick}
        >
            {text}
        </button>
    );

}

export default ButtonToggle;