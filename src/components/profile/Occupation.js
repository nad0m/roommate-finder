import React from 'react';

const Occupation = ({ occupation, onButtonClick, editting }) => {

    if (editting) {
        return null;
    }

    return (
        <div className="field-container">
            <span className="block">
                {occupation}
            </span>
        </div>
    );
}

export default Occupation;