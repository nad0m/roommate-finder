import React from 'react';
import './elements.css';

const Tag = ({text, icon, size, margin}) => {

    return (
        <div className={`tag-custom-container ${size} ${margin}`}>
            {getIcon(icon)}
            <span className="center">
               {text} 
            </span>
            
        </div>
    );
}

const getIcon = (icon) => {
    return icon ? <span className="prefix">{icon}</span> : null;
}

export default Tag;