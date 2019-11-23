import React from 'react';
import ButtonToggle from '../elements/ButtonToggle';
import Tag from '../elements/Tag';
import { prefGenderData } from '../../util/static-data';

const PreferredGender = ({ occupation, onButtonClick, editting }) => {

    if (editting) {
        return (
            <div className="field-container space-evenly">
                {renderButtons(occupation, onButtonClick)}
            </div> 
        )
    }

    return (
        <div className="field-container">
            <Tag text={occupation} margin="tag"/>
        </div>
    );
}

const renderButtons = (occupation, onButtonClick) => {
    return prefGenderData.map(button => <ButtonToggle 
                                    key={button} 
                                    text={button} 
                                    active={button === occupation} 
                                    onClick={onButtonClick}
                                    toggleMode={false}
                                />);
}

export default Occupation;