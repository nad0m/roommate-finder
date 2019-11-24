import React from 'react';
import ButtonToggle from '../elements/ButtonToggle';
import Tag from '../elements/Tag';

const GenericPicker = ({ text, onButtonClick, editting, dataSet }) => {

    if (editting) {
        return (
            <div className="field-container">
                {renderButtons(dataSet, onButtonClick, text)}
            </div> 
        )
    }

    return (
        <div className="field-container">
            <Tag text={text} margin="tag"/>
        </div>
    );
}

const renderButtons = (dataSet, onButtonClick, text) => {
    return dataSet.map(button => <ButtonToggle 
                                    key={button} 
                                    text={button} 
                                    active={button === text} 
                                    onClick={onButtonClick}
                                    toggleMode={false}
                                />);
}

export default GenericPicker;