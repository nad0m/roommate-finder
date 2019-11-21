import React from 'react';
import NameField from './NameField';
import DobField from './DobField';
import LocationField from './LocationField';
import GenderField from './GenderField';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../actions'
import { validProfile, parseProfile } from '../../util/validation';

class ProfileEdit extends React.Component {

    state = {
        displayName: this.props.profile.displayName ? this.props.profile.displayName : "",
        dobMonth: this.props.profile.dob ? this.props.profile.dob.toDate().getUTCMonth() : "",
        dobDay: this.props.profile.dob ? this.props.profile.dob.toDate().getUTCDate() : "",
        dobYear: this.props.profile.dob ? this.props.profile.dob.toDate().getUTCFullYear() : "",
        location: this.props.profile.location ? this.props.profile.location : "",
        gender: this.props.profile.gender,
        genderButtons: {
            him: this.props.profile.gender === 'Male',
            she: this.props.profile.gender === 'Female',
            they: this.props.profile.gender === 'Neutral'
        }
    }

    /*componentDidMount() {
        const {displayName, dob, location, gender} = this.props.profile;

        this.setState({
            displayName,
            dob: dob ? dob.toDate() : "",
            dobMonth: dob ? dob.toDate().getUTCMonth() : "",
            dobDay: dob ? dob.toDate().getUTCDate() : "",
            dobYear: dob ? dob.toDate().getUTCFullYear() : "",
            location: location ? location : "",
            gender,
            genderButtons: {
                him: gender === 'Male',
                she: gender === 'Female',
                they: gender === 'Neutral'
            }
        });
    }*/

    onLocationSelect = (target) => {
        this.setState({location: target.value});
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
                this.setState( { genderButtons: { him: true, she: false, they: false }, gender: 'Male' } );
                break;
            case 'she-button': 
                this.setState( { genderButtons: { him: false, she: true, they: false }, gender: 'Female' } );
                break;
            case 'they-button': 
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
                    <NameField onInputChange={this.onInputChange} value={this.state.displayName} />
                    <DobField onInputChange={this.onInputChange} value={this.state.dob} />
                </div>

                <div className="fields">
                    <LocationField onInputChange={this.onInputChange} value={this.state.location} onLocationSelect={this.onLocationSelect} />
                    <GenderField onButtonClick={this.buttonClick} activeGender={this.state.genderButtons} />
                </div>

                <div className="button-container">
                    <div className="button-cancel" onClick={this.props.hideModal}>
                        <button className="ui button">Cancel</button>
                    </div>
                    
                    <div className="button-save">
                        <button 
                            className="ui button primary" 
                            onClick={(e) => {
                                const errors = validProfile(this.state);
                                
                                if (errors.length > 0) {
                                    console.log(errors);
                                } else {
                                    const updates = parseProfile(this.state);
                                    this.props.updateUserProfile({...updates, uid: this.props.uid}, this.props.hideModal);
                                }
                            }}>
                                Save
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return { uid: state.auth.userId };
}


export default connect(mapStateToProps, { updateUserProfile })(ProfileEdit);