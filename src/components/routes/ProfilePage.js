import React from 'react';
import ProfileHeader from '../profile/ProfileHeader';
import AboutYou from '../profile/AboutYou';
import YourPreferences from '../profile/YourPreferences';
import Sidebar from '../profile/Sidebar';
import ProfileEditModal from '../../modals/ProfileEditModal';
import ProfileEdit from '../profile/ProfileEdit';
import { validProfile, parseProfile, parseTimestamp } from '../../util/validation';
import { connect } from 'react-redux';
import { updateUserProfile, updateContentProfile } from '../../actions';
import { ABOUT_YOU, YOUR_PREFERENCES } from '../profile/types';

import '../profile/profile-header.css';
import '../profile/content.css';


class ProfilePage extends React.Component {

    state = {
        userId: this.props.userId,
        ...this.props.mainProfile,
        inEditMode: false,
        edittingAboutYou: false,
        edittingYourPreferences: false,
        editProfile: false
    }

    constructor(props) {
        super(props);
        this.locationRef = React.createRef();
    }

    showModal = () => {
        this.setState({ editProfile: true });
        document.body.style.overflow = 'hidden';
    }

    hideModal = () => {
        this.setState({ ...this.props.mainProfile, ...parseTimestamp(this.props.mainProfile.userProfile.dob), editProfile: false });
        document.body.style.overflow = 'unset';
    }

    save = async () => {
        const success = await this.props.updateContentProfile(this.state.userProfile.uid, this.state.userProfileContent);

        if (success) {
            this.cancel();
        }
    }

    cancel = () => {
        this.setState({ 
            userProfileContent: this.props.mainProfile.userProfileContent, 
            edittingAboutYou: false,
            edittingYourPreferences: false, 
            inEditMode: false 
        })
    }

    onPrefLocationSelect = (location) => {
        this.setState({
            ...this.state, userProfileContent: {
                ...this.state.userProfileContent, 
                    yourPreferences: {
                        ...this.state.userProfileContent.yourPreferences, 
                        preferredLocation: location
                    }
                }
            }
        );
    }

    onEditClick = (form) => {
        console.log(form);
        switch (form) {
            case ABOUT_YOU:
                this.scrollTo(form);
                this.setState({edittingAboutYou: true, inEditMode: true});
                break;
            case YOUR_PREFERENCES:
                this.scrollTo(form);
                this.setState({edittingYourPreferences: true, inEditMode: true}, () => {
                    const options = {
                        types: ['(cities)'],
                        componentRestrictions: {country: "us"}
                    };
                    this.autocomplete = new window.google.maps.places.Autocomplete(this.locationRef.current, options);
                    window.google.maps.event.addListener(this.autocomplete, 'place_changed', () => this.onPrefLocationSelect(this.locationRef.current.value));
                });
                break;
            default:
                break;
        }
    }

    onOccupationClick = ({ target }) => {
        this.setState({
            ...this.state, userProfileContent: {
                ...this.state.userProfileContent, 
                    aboutYou: {
                        ...this.state.userProfileContent.aboutYou, 
                        occupation: target.innerText
                    }
                }
            }
        );
    }

    onPrefGenderClick = ({ target }) => {
        this.setState({
            ...this.state, userProfileContent: {
                ...this.state.userProfileContent, 
                    yourPreferences: {
                        ...this.state.userProfileContent.yourPreferences, 
                        preferredGender: target.innerText
                    }
                }
            }
        );
    }

    onAttributesClick = ({ target }) => {
        if (this.state.userProfileContent.aboutYou.attributes.indexOf(target.innerText) === -1) {
            this.setState({
                ...this.state, userProfileContent: {
                    ...this.state.userProfileContent, 
                        aboutYou: {
                            ...this.state.userProfileContent.aboutYou, 
                            attributes: [...this.state.userProfileContent.aboutYou.attributes, target.innerText]
                        }
                    }
                }
            );
        } else {
            this.setState({
                ...this.state, userProfileContent: {
                    ...this.state.userProfileContent, 
                        aboutYou: {
                            ...this.state.userProfileContent.aboutYou, 
                            attributes: this.state.userProfileContent.aboutYou.attributes.filter(item => item !== target.innerText)
                        }
                    }
                }
            );
        }
    }

    renderModal = () => {
        if (this.state.editProfile) {
            return (
                <ProfileEditModal onDismiss={this.hideModal}>
                    <ProfileEdit 
                        profile={this.state.userProfile} 
                        onInputChange={this.onInputChange}
                        onLocationSelect={this.onLocationSelect}
                        onGenderClick={this.onGenderClick}
                        hideModal={this.hideModal} 
                        updateHeader={this.updateHeader} />
                </ProfileEditModal>
            );
        }
    }

    onInputChange = (e) => {
        console.log(e.target)
        const re = /^[0-9\b]+$/;
        switch(e.target.name) {
            case 'name-input': 
                this.setState({...this.state, userProfile: {...this.state.userProfile, displayName: e.target.value}});
                break;
            case 'location-input': 
                this.setState({...this.state, userProfile: {...this.state.userProfile, location: e.target.value}});
                break;
            case 'month-input':
                this.setState({...this.state, userProfile: {...this.state.userProfile, dobMonth: e.target.value-1}});
                break;
            case 'day-input':
                this.setState({...this.state, userProfile: {...this.state.userProfile, dobDay: e.target.value}});
                break;
            case 'year-input':
                this.setState({...this.state, userProfile: {...this.state.userProfile, dobYear: e.target.value}});
                break;
            case 'min':
                console.log(e.target.value === '' || re.test(e.target.value))
                if (e.target.value === '' || re.test(e.target.value)) {
                    this.setState({
                        ...this.state, userProfileContent: {
                            ...this.state.userProfileContent, 
                                aboutYou: {
                                    ...this.state.userProfileContent.aboutYou, 
                                    budgetLower: e.target.value
                                }
                            }
                        }
                    );
                }
                break;
            case 'max':
                if (e.target.value === '' || re.test(e.target.value)) {
                    this.setState({
                        ...this.state, userProfileContent: {
                            ...this.state.userProfileContent, 
                                aboutYou: {
                                    ...this.state.userProfileContent.aboutYou, 
                                    budgetUpper: e.target.value
                                }
                            }
                        }
                    );
                }
                break;
            case 'pref-location':
                this.setState({
                    ...this.state, userProfileContent: {
                        ...this.state.userProfileContent, 
                            yourPreferences: {
                                ...this.state.userProfileContent.yourPreferences, 
                                preferredLocation: e.target.value
                            }
                        }
                    }
                );
                break;
            default:
                return;
        }
    }

    onLocationSelect = (target) => {
        this.setState({...this.state, userProfile: {...this.state.userProfile, location: target.value}});
    }

    onGenderClick = ({target}) => {
        this.setState({...this.state, userProfile: {...this.state.userProfile, gender: target.name}});
    }

    scrollTo = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    updateHeader = (e) => {
        console.log(this.state.userProfile);
        const errors = validProfile(this.state.userProfile);
        
        if (errors.length > 0) {
            console.log(errors);
        } else {
            const updates = parseProfile(this.state.userProfile);
            this.props.updateUserProfile({...updates, uid: this.state.userId}, this.hideModal);
        }
    }

    render() {
            return (
            <React.Fragment>
                <div className="black-border">           
                    <h1>Your Profile</h1>
                    <p>Sharing more information about yourself can help you find more potential roommates.</p>

                    <ProfileHeader 
                        data={this.state.userProfile} 
                        showModal={this.showModal} 
                    />                      
                </div>

                <div className="profile-content-container">
                    <div className="profile-content-items">
                        <AboutYou 
                            data={this.state.userProfileContent.aboutYou} 
                            onInputChange={this.onInputChange}
                            editting={this.state.edittingAboutYou} 
                            inEditMode={this.state.inEditMode}
                            onEditClick={this.onEditClick}
                            onOccupationClick={this.onOccupationClick}
                            onAttributesClick={this.onAttributesClick}
                            updateContentProfile={this.props.updateContentProfile}
                            userId={this.state.userId}
                            save={this.save}
                            cancel={this.cancel}
                        /> 

                        <YourPreferences 
                            data={this.state.userProfileContent.yourPreferences}
                            locationRef={this.locationRef} 
                            onInputChange={this.onInputChange}
                            editting={this.state.edittingYourPreferences} 
                            inEditMode={this.state.inEditMode}
                            onEditClick={this.onEditClick}
                            onPrefGenderClick={this.onPrefGenderClick}
                            onAttributesClick={this.onAttributesClick}
                            updateContentProfile={this.props.updateContentProfile}
                            userId={this.state.userId}
                            save={this.save}
                            cancel={this.cancel}
                        /> 
                    </div>
                    <Sidebar />
                </div>

                {this.renderModal()}
            </React.Fragment>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        mainProfile: state.profile,
    }
}

export default connect(mapStateToProps, { updateUserProfile, updateContentProfile })(ProfilePage);