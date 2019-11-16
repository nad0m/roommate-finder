import React from 'react';
import NameField from './NameField';
import DobField from './DobField';
import LocationField from './LocationField';
import GenderField from './GenderField';
import { connect } from 'react-redux';

class ProfileEdit extends React.Component {

    state = {
        displayName: "",
        dobMonth: null,
        dobDay: null,
        dobYear: null,
        location: null,
        gender: null,
        genderButtons: {
            him: false,
            she: false,
            they: false
        }
    }

    componentDidMount() {
        const {displayName, dob, location, gender} = this.props.profile;

        this.setState({
            displayName,
            dobMonth: 10,
            dobDay: 10,
            dobYear: 1990,
            location,
            gender,
            genderButtons: {
                him: gender === 'Male',
                she: gender === 'Female',
                they: gender === 'Non-binary'
            }
        });
    }

    onInputChange = (e) => {

        switch(e.target.name) {
            case 'name-input': 
                this.setState({displayName: e.target.value});
        }
        console.log(e.target.value);
    }

    buttonClick = ({target}) => {
        
        switch(target.name) {
            case 'him-button': 
                this.setState( { genderButtons: { him: true, she: false, they: false } } );
                break;
            case 'she-button': 
                this.setState( { genderButtons: { him: false, she: true, they: false } } );
                break;
            case 'they-button': 
                this.setState( { genderButtons: { him: false, she: false, they: true } } );
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
                    <NameField onInputChange={this.onInputChange} value={this.state.displayName} />
                    <DobField onInputChange={this.onInputChange} />
                </div>

                <div className="fields">
                    <LocationField onInputChange={this.onInputChange} />
                    <GenderField onButtonClick={this.buttonClick} activeGender={this.state.genderButtons} />
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

const mapStateToProps = (state) => {
    return { userProfile: state.profile.userProfile };
}

export default connect(mapStateToProps)(ProfileEdit);