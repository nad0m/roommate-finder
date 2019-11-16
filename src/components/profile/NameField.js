import React from 'react';

const NameFields = (props) => {

    console.log(props.value);

    return (
        <div className="ten wide field">
            <label className="field-label">Full Name</label>
            <input
                name="name-input" 
                type="text" 
                placeholder="Full Name" 
                value={props.value}
                onChange={props.onInputChange} 
            />
        </div>
    );
}

export default NameFields;