import React from 'react';

const PreferredLocation = ({ locationRef }) => {

    return (
        <div className="field-container">
            <div className="input-custom-container large">
                <span className="prefix">
                    {mapIcon()}
                </span>
                <input className="input-custom"
                    name={"name"}
                    ref={locationRef}
                    type="text"
                    defaultValue=""
                    placeholder={"Location"}
                    maxLength={99}
                    onChange={() => console.log("hello")}
                />
            </div>
        </div>
        
    );
}

const mapIcon = () => {
    return <i className="ui icon map marker alternate"></i>;
}

export default PreferredLocation;