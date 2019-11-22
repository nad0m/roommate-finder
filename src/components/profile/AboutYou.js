import React from 'react';
import Budget from './Budget';
import Occupation from './Occupation';
import Attributes from './Attributes';
import EditControls from './EditControls';
import ContentHeader from './ContentHeader';
import { ABOUT_YOU } from '../profile/types';

class AboutYou extends React.Component {

    disableButton = () => {
        return this.props.editting ? "circular ui icon button disabled" : "circular ui icon button";
    }

    shouldUnfocus =() => {
        return !this.props.editting && this.props.inEditMode ? "content-container unfocused" : "content-container";
    }

    render() {
        return (
                <div id={ABOUT_YOU} className={this.shouldUnfocus()}>
                    <ContentHeader 
                        title="About You" 
                        disabledStyle={this.disableButton()} 
                        onEditClick={() => this.props.onEditClick(ABOUT_YOU)} 
                    />
                    
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
        );
    }
}

export default AboutYou;