import React from 'react';
import Budget from './Budget';
import Occupation from './Occupation';
import EditControls from './EditControls';
import { ABOUT_YOU } from '../profile/types';
import './content.css';

class AboutYou extends React.Component {

    state = {  
        budgetLower: "",
        budgetUpper: "",
        occupation: ""
    }

    onInputChange = ({ target }) => {
        console.log(target.value);
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

    occupationClick = ({ target }) => {
        this.setState({ occupation: target.name })
    }

    disableButton = () => {
        return this.props.editting ? "circular ui icon button disabled" : "circular ui icon button";
    }

    onEditClick = () => {
        this.props.onEditClick(ABOUT_YOU);
    }

    componentDidMount() {
        this.setState({ 
            ...this.props.data.budget,
            occupation: this.props.data.occupation
        });
    }

    render() {
        return (
            <React.Fragment>  
                <div id={ABOUT_YOU} className="content-container">
                    <div className="edit-header">
                        <h3>About You</h3>
                        <button className={this.disableButton()} onClick={this.onEditClick}>
                            <i className="pencil icon"></i>
                        </button>
                    </div>
                    
                    <span>Monthly budget</span>
                    <Budget 
                        budgetLower={this.state.budgetLower} 
                        budgetUpper={this.state.budgetUpper}
                        onInputChange={this.onInputChange}
                        editting={this.props.editting}
                    />

                    <span>Occupation</span>
                    <Occupation 
                        occupation={this.state.occupation}
                        onButtonClick={this.occupationClick}
                        editting={this.props.editting}
                    />

                    <EditControls editting={this.props.editting} cancel={this.onEditClick} />
                </div>

            </React.Fragment>
        );
    }
}

export default AboutYou;