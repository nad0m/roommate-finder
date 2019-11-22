import React from 'react';

const Budget = ({ budgetLower, budgetUpper, onInputChange, editting }) => {

    if (editting) {
        return (
            <React.Fragment>
                <div className="field-container">
                    <div className="input-container">
                        <span className="dollar">$</span>
                        <input 
                            name="min"
                            type="text"
                            className="money-input" 
                            value={budgetLower ? budgetLower : ""}
                            placeholder="00,000"
                            maxLength="5"
                            onChange={onInputChange}
                        />
                    </div>
                    <hr></hr>
                    <div className="input-container">
                        <span className="dollar">$</span>
                        <input 
                            name="max"
                            type="text"
                            className="money-input" 
                            value={budgetUpper ? budgetUpper : ""}
                            placeholder="00,000"
                            maxLength="5"
                            onChange={onInputChange}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }

    return (
        <div className="field-container">
            <span className="block">
                <span className="dollar">$</span>
                {formatInt(budgetLower)}
            </span>
            <hr></hr>
            <span className="block">
                <span className="dollar">$</span>
                {formatInt(budgetUpper)}
            </span>
        </div>
    );      
}

const formatInt = (val) => {
    if (!val) {
        return "";
    }

    if (val.length < 4) {
        return val.replace(',', "");
    }

    return parseInt(val).toLocaleString();
}

export default Budget;


