import React from 'react';
import Input from '../elements/Input';
import Tag from '../elements/Tag';

const Budget = ({ budgetLower, budgetUpper, onInputChange, editting }) => {

    if (editting) {
        return (
            <React.Fragment>
                <div className="field-container">
                    <Input 
                        name="min"
                        type="text"
                        size="small"
                        align="center"
                        icon="$"
                        value={budgetLower}
                        placeholder="00,000"
                        maxLength="5"
                        onChange={onInputChange}
                    />

                    <hr></hr>
                    <Input 
                        name="max"
                        type="text"
                        size="small"
                        align="center"
                        icon="$"
                        value={budgetUpper}
                        placeholder="00,000"
                        maxLength="5"
                        onChange={onInputChange}
                    />
                </div>
            </React.Fragment>
        );
    }

    return (
        <div className="field-container">
            <Tag 
                text={formatInt(budgetLower)}
                icon="$"
                size="small"
                align="center"
            />
            <hr></hr>
            <Tag 
                text={formatInt(budgetUpper)}
                icon="$"
                size="small"
                align="center"
            />
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


