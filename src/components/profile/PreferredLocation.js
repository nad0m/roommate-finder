import React from 'react';
import Tag from '../elements/Tag';

const PreferredLocation = ({ editting, locationRef, value, onInputChange }) => {

    if (editting) {
        return (
            <div className="field-container">
                <div className="input-custom-container large">
                    <span className="prefix">
                        {mapIcon()}
                    </span>
                    <input className="input-custom"
                        name="pref-location"
                        ref={locationRef}
                        type="text"
                        value={value ? value : ""}
                        placeholder={"Location"}
                        maxLength={99}
                        onChange={onInputChange}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="field-container">
            <Tag 
                text={value}
                icon={mapIcon()}
                size="large"
                align="left"
                margin="tag"
            />
        </div>
    );

}

const mapIcon = () => {
    return <i className="ui icon map marker alternate"></i>;
}

export default PreferredLocation;