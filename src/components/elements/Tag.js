import React from 'react';
import './elements.css';

const Tag = ({text, icon, size, margin, align}) => {

    return (
        <div className={`tag-custom-container ${size} ${margin}`}>
            {getIcon(icon)}
            <span className={align}>
               {text} 
            </span>
            
        </div>
    );
}

const getIcon = (icon) => {
    return icon ? <span className="prefix">{icon}</span> : null;
}

export default Tag;