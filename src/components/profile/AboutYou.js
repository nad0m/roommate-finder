import React from 'react';
import Budget from './Budget';
import Occupation from './Occupation';
import Attributes from './Attributes';
import EditControls from './EditControls';
import { ABOUT_YOU } from '../profile/types';
import './content.css';

class AboutYou extends React.Component {

    state = {  
        original: this.props.data,
        budgetLower: this.props.data ? this.props.data.budgetLower : "",
        budgetUpper: this.props.data ? this.props.data.budgetUpper : "",
        occupation: this.props.data ? this.props.data.occupation : "",
        attributes: this.props.data ? this.props.data.attributes : [],
        saving: false
    }

    onInputChange = ({ target }) => {
        const re = /^[0-9\b]+$/;

        switch (target.name) {
            case 'min':
                if (target.value === '' || re.test(target.value)) {
                    this.setState({budgetLower: target.value});
                }
                break;
            case 'max':
                if (target.value === '' || re.test(target.value)) {
                    this.setState({budgetUpper: target.value});
                }
                break;
            default:
                return;
        } 
    }

    occupationClick = ({ target }) => {
        this.setState({ occupation: target.innerText })
    }

    attributesClick = ({ target }) => {
        if (this.state.attributes.indexOf(target.innerText) === -1) {
            this.setState({ attributes: [...this.state.attributes, target.innerText] });
        } else {
            this.setState({ attributes: this.state.attributes.filter(item => item !== target.innerText) });
        }
    }

    disableButton = () => {
        return this.props.editting ? "circular ui icon button disabled" : "circular ui icon button";
    }

    onEditClick = () => {
        this.props.onEditClick(ABOUT_YOU);
    }

    save = async () => {
        this.setState({saving: true});
        const state = (({ budgetLower, budgetUpper, occupation, attributes }) => ({ budgetLower, budgetUpper, occupation, attributes }))(this.state);
        const payload = {aboutYou: state};
        const success = await this.props.updateContentProfile(this.props.userId, payload);
        this.setState({saving: false});

        if (success) {
            this.setState({original: state});
            this.onEditClick();
        } else {
            this.setState({...this.state, ...this.state.original});
        }
    }

    cancel = () => {
        this.setState({...this.state, ...this.state.original})
        this.onEditClick();
    }

    componentDidMount() {
        this.setState({ 
            ...this.props.data
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

                    <span>Attributes</span>
                    <Attributes 
                        attributes={this.state.attributes}
                        onButtonClick={this.attributesClick}
                        editting={this.props.editting}
                    />

                    <EditControls editting={this.props.editting} cancel={this.cancel} save={this.save} />
                </div>

            </React.Fragment>
        );
    }
}

export default AboutYou;