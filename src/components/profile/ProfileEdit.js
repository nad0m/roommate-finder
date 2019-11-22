import React from 'react';
import NameField from './NameField';
import DobField from './DobField';
import LocationField from './LocationField';
import GenderField from './GenderField';

class ProfileEdit extends React.Component {

    genderClick = ({target}) => {
        
        this.setState()
        switch(target.name) {
            case 'Male': 
                this.setState( { genderButtons: { him: true, she: false, they: false }, gender: 'Male' } );
                break;
            case 'Female': 
                this.setState( { genderButtons: { him: false, she: true, they: false }, gender: 'Female' } );
                break;
            case 'Neutral': 
                this.setState( { genderButtons: { him: false, she: false, they: true }, gender: 'Neutral' } );
                break;
            default:
                return;
        }
    }

    render() {
        return (
            <div className="ui form profile-edit-container" onClick={(e) => e.stopPropagation()}>
                <h2>Edit Profile</h2>  
                <div className="fields">
                    <NameField onInputChange={this.props.onInputChange} value={this.props.profile.displayName} />
                    <DobField onInputChange={this.props.onInputChange} value={this.props.profile.dob} />
                </div>

                <div className="fields">
                    <LocationField onInputChange={this.props.onInputChange} value={this.props.profile.location} onLocationSelect={this.props.onLocationSelect} />
                    <GenderField onButtonClick={this.props.onGenderClick} gender={this.props.profile.gender} />
                </div>

                <div className="button-container">
                    <div className="button-cancel" onClick={this.props.hideModal}>
                        <button className="ui button">Cancel</button>
                    </div>
                    
                    <div className="button-save">
                        <button 
                            className="ui button primary" 
                            onClick={this.props.updateHeader}>
                                Save
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default (ProfileEdit);