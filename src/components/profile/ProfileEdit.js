import React from 'react';
import NameField from './NameField';
import DobField from './DobField';
import LocationField from './LocationField';
import GenderField from './GenderField';

class ProfileEdit extends React.Component {

    state = {
        name: null,
        dobMonth: null,
        dobDay: null,
        dobYear: null,
        location: null,
        gender: {
            him: false,
            she: false,
            they: false
        }
    }

    onInputChange = (e) => {
        console.log(e.target.value);
    }

    buttonClick = ({target}) => {
        
        switch(target.name) {
            case 'him-button': 
                this.setState( { gender: { him: true, she: false, they: false } } );
                break;
            case 'she-button': 
                this.setState( { gender: { him: false, she: true, they: false } } );
                break;
            case 'they-button': 
                this.setState( { gender: { him: false, she: false, they: true } } );
                break;
            default:
                return;
        }
    }

    render() {
        return (
            <div className="ui form profile-edit-container" onClick={(e) => e.stopPropagation()}>
                <div className="fields">
                    <NameField onInputChange={this.onInputChange} />
                    <DobField onInputChange={this.onInputChange} />
                </div>

                <div className="fields">
                    <LocationField onInputChange={this.onInputChange} />
                    <GenderField onButtonClick={this.buttonClick} activeGender={this.state.gender} />
                </div>

                <div className="button-container">
                    <div className="button-cancel">
                        <button className="ui button">Cancel</button>
                    </div>
                    
                    <div className="button-save">
                        <button className="ui button primary">Save</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ProfileEdit;