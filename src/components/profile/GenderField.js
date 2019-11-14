import React from 'react';

const GenderField = (props) => {

    return (
        <div className="six field">
            <label className="field-label">Preferred Pronoun</label>
            <button name="him-button" className={getActive('him', props.activeGender)} onClick={props.onButtonClick}>Him</button>
            <button name="she-button" className={getActive('she', props.activeGender)} onClick={props.onButtonClick}>She</button>
            <button name="they-button" className={getActive('they', props.activeGender)} onClick={props.onButtonClick}>They</button>
        </div>
    );
}

const getActive = (key, state) => {
    const basic = "ui basic button";
    const active = "ui inverted primary button active"
    return state[key] ? active : basic;
}

export default GenderField;