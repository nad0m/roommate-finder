import React from 'react';
import './elements.css';

const Input = ({ name, type, maxLength, onInputChange, icon, value, placeholder }) => {


    return (

        <div className="input-custom-container large">
            <span className="prefix">
                {icon}
            </span>
            <input 
                name={name}
                type={type}
                className="input-custom" 
                defaultValue={value ? value : ""}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={onInputChange}
            />
        </div>
    );
}

export default Input;