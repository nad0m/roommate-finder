import React from 'react';
import './elements.css';

const Tag = ({text}) => {

    return (
        <span className="block tag">
            {text}
        </span>
    );
}

export default Tag;