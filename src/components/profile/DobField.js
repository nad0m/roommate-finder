import React from 'react';

class DobField extends React.Component {

    constructor(props) {
        super(props);
        this.dayInput = React.createRef();
        this.yearInput = React.createRef();
    }

    onKeyUp(e, maxLength) {
        const input = e.target.name === 'month-input' ? this.dayInput : this.yearInput;

        if (e.target.value.length === maxLength) {
            input.current.focus();
        }
    }

    render() {

        return (
            <div className="six wide field">
                <label className="field-label">Date of Birth</label>
                <div className="three fields">
                    <div className="field">      
                        <input 
                            name="month-input"
                            type="text" 
                            placeholder="MM" 
                            maxLength="2" 
                            onChange={(e) => {
                                this.onKeyUp(e, 2);
                                this.props.onInputChange(e);
                            }}
                        />
                    </div>
                    <div className="field">
                        <input 
                            ref={this.dayInput}
                            name="day-input"
                            type="text" 
                            placeholder="DD" 
                            maxLength="2" 
                            onChange={(e) => {
                                this.onKeyUp(e, 2);
                                this.props.onInputChange(e);
                            }}
                        />
                    </div>
                    <div className="field">
                        <input 
                            ref={this.yearInput}
                            name="year-input"
                            type="text"                                     
                            placeholder="YYYY" 
                            maxLength="4" 
                            onChange={(e) => {
                                this.props.onInputChange(e);
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default DobField;