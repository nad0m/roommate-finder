import React from 'react';
import './elements.css';

const Input = ({ name, type, size, align, maxLength, onChange, icon, value, placeholder }) => {

    console.log(name);

    return (

        <div className={`input-custom-container ${size}`}>
            <span className="prefix">
                {icon}
            </span>
            <input 
                name={name}
                className={`input-custom ${align}`} 
                value={value ? value : ""}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;