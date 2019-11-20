import React from 'react';
import './content.css';

class AboutYou extends React.Component {

    state = {  
        budgetLower: "",
        budgetUpper: ""
    }

    onInputChange = ({ target }) => {
        
        switch (target.name) {
            case 'min':
                this.setState({budgetLower: target.value});
                break;
            case 'max':
                this.setState({budgetUpper: target.value});
                break;
            default:
                return;
        } 
    }

    renderFields() {
        if (this.props.editting) {
            return (
                <div className="budget-container">
                    <div className="input-container">
                        <span className="dollar">$</span>
                        <input 
                            name="min"
                            className="money-input" 
                            value={this.state.budgetLower}
                            placeholder="00,000"
                            maxLength="5"
                            onChange={this.onInputChange}
                        />
                    </div>
                    <hr></hr>
                    <div className="input-container">
                        <span className="dollar">$</span>
                        <input 
                            name="max"
                            className="money-input" 
                            value={this.state.budgetUpper}
                            placeholder="00,000"
                            maxLength="5"
                            onChange={this.onInputChange}
                        />
                    </div>
                </div>
            );
        }

        return (
            <div className="budget-container">
                <span className="money">
                    <span className="dollar">$</span>
                    {this.state.budgetLower}
                </span>
                <hr></hr>
                <span className="money">
                    <span className="dollar">$</span>
                    {this.state.budgetUpper}
                </span>
            </div>
        );      
    }

    disableButton = () => {
        return this.props.editting ? "circular ui icon button disabled" : "circular ui icon button";
    }

    componentDidMount() {
        this.setState({ ...this.props.data.budget });
    }

    render() {
        return (
            <div className="content-container">
                <div className="edit-header">
                    <h3>About You</h3>
                    <button className={this.disableButton()} onClick={() => this.props.onEditClick('about-you')}>
                        <i className="pencil icon"></i>
                    </button>
                </div>
                
                <span>Monthly budget</span>
                {this.renderFields()}
            </div>
        );
    }
}

export default AboutYou;