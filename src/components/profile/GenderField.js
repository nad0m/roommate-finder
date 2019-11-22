import React from 'react';

const GenderField = ({gender, onButtonClick}) => {

    return (
        <div className="six field">
            <label className="field-label">Preferred Pronoun</label>
            <button name="Male" className={getActive("Male" === gender)} onClick={onButtonClick}>Him</button>
            <button name="Female" className={getActive("Female" === gender)} onClick={onButtonClick}>She</button>
            <button name="Neutral" className={getActive("Neutral" === gender)} onClick={onButtonClick}>They</button>
        </div>
    );
}

const getActive = (isActive) => {
    const basic = "ui basic button";
    const active = "ui inverted primary button active"
    return isActive ? active : basic;
}

export default GenderField;