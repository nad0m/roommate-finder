import React from 'react';
import Budget from './Budget';
import Occupation from './Occupation';
import Attributes from './Attributes';
import EditControls from './EditControls';
import { ABOUT_YOU } from '../profile/types';
import './content.css';

class AboutYou extends React.Component {

    disableButton = () => {
        return this.props.editting ? "circular ui icon button disabled" : "circular ui icon button";
    }

    render() {
        return (
            <React.Fragment>  
                <div id={ABOUT_YOU} className="content-container">
                    <div className="edit-header">
                        <h3>About You</h3>
                        <button className={this.disableButton()} onClick={() => this.props.onEditClick(ABOUT_YOU)}>
                            <i className="pencil icon"></i>
                        </button>
                    </div>
                    
                    <span>Monthly budget</span>
                    <Budget 
                        budgetLower={this.props.data.budgetLower} 
                        budgetUpper={this.props.data.budgetUpper}
                        onInputChange={this.props.onInputChange}
                        editting={this.props.editting}
                    />

                    <span>Occupation</span>
                    <Occupation 
                        occupation={this.props.data.occupation}
                        onButtonClick={this.props.onOccupationClick}
                        editting={this.props.editting}
                    />

                    <span>Attributes</span>
                    <Attributes 
                        attributes={this.props.data.attributes}
                        onButtonClick={this.props.onAttributesClick}
                        editting={this.props.editting}
                    />

                    <EditControls editting={this.props.editting} cancel={this.props.cancel} save={this.props.save} type={ABOUT_YOU}/>
                </div>

            </React.Fragment>
        );
    }
}

export default AboutYou;