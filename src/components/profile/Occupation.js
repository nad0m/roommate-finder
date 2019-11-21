import React from 'react';
import ButtonToggle from '../elements/ButtonToggle';
import Tag from '../elements/Tag';
import { occupationData } from '../../util/static-data';

const Occupation = ({ occupation, onButtonClick, editting }) => {

    if (editting) {
        return (
            <div className="field-container space-evenly">
                {renderButtons(occupation, onButtonClick)}
            </div> 
        )
    }

    return (
        <div className="field-container">
            <Tag text={occupation} />
        </div>
    );
}

const renderButtons = (occupation, onButtonClick) => {
    return occupationData.map(button => <ButtonToggle 
                                    key={button} 
                                    text={button} 
                                    active={button === occupation} 
                                    onClick={onButtonClick}
                                    toggleMode={false}
                                />);
}

export default Occupation;