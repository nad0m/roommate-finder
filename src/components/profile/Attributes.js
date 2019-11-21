import React from 'react';
import ButtonToggle from '../elements/ButtonToggle';
import Tag from '../elements/Tag';
import { attributesData } from '../../util/static-data';

const Attributes = ({ attributes, onButtonClick, editting }) => {

    if (editting) {
        return (
            <div className="field-container space-evenly">
                {renderButtons(attributes, onButtonClick)}
            </div> 
        )
    }

    return (
        <div className="field-container">
            {attributes.map(attribute => <Tag key={attribute} text={attribute} />)}
        </div>
    );
}

const renderButtons = (attributes, onButtonClick) => {
    return attributesData.map(button => <ButtonToggle 
                                    key={button} 
                                    text={button} 
                                    active={attributes.indexOf(button) > -1} 
                                    onClick={onButtonClick}
                                    toggleMode={true}
                                />);
}

export default Attributes;