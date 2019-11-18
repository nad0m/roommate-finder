import React from 'react';
import NameField from './NameField';
import DobField from './DobField';
import LocationField from './LocationField';
import GenderField from './GenderField';
import { connect } from 'react-redux';

class ProfileEdit extends React.Component {

    state = {
        displayName: "",
        dobMonth: "",
        dobDay: "",
        dobYear: "",
        location: "",
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
            dob: dob.toDate(),
            dobMonth: dob.toDate().getUTCMonth(),
            dobDay: dob.toDate().getUTCDate(),
            dobYear: dob.toDate().getUTCFullYear(),
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
                break;
            case 'location-input': 
                this.setState({location: e.target.value});
                break;
            case 'month-input':
                this.setState({dobMonth: e.target.value});
                break;
            case 'day-input':
                this.setState({dobDay: e.target.value});
                break;
            case 'year-input':
                this.setState({dobYear: e.target.value});
                break;
            default:
                return;
        }
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
                    <DobField onInputChange={this.onInputChange} value={this.state.dob} />
                </div>

                <div className="fields">
                    <LocationField onInputChange={this.onInputChange} value={this.state.location} />
                    <GenderField onButtonClick={this.buttonClick} activeGender={this.state.genderButtons} />
                </div>

                <div className="button-container">
                    <div className="button-cancel">
                        <button className="ui button">Cancel</button>
                    </div>
                    
                    <div className="button-save">
                        <button className="ui button primary" onClick={(e) => {console.log(this.state)}}>Save</button>
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