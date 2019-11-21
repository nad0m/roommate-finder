import React from 'react';
import ProfileHeader from '../profile/ProfileHeader';
import AboutYou from '../profile/AboutYou';
import Sidebar from '../profile/Sidebar';
import { connect } from 'react-redux';
import { updateContentProfile } from '../../actions';
import { ABOUT_YOU } from '../profile/types';

import '../profile/profile-header.css';

class ProfilePage extends React.Component {

    state = {
        ...this.props.userProfileContent,
        edittingAboutYou: false
    }

    edit = (form) => {
        switch (form) {
            case ABOUT_YOU:
                if (!this.state.edittingAboutYou) {
                    this.scrollTo(form);
                }
                this.setState({edittingAboutYou: !this.state.edittingAboutYou});
                break;
            default:
                break;
        }
    }

    scrollTo = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        console.log(this.props.userProfileContent);
            return (
                <>
                <div className="black-border">           
                    <h1>
                        Your Profile
                    </h1>
                    <p>
                        Sharing more information about yourself can help you find more potential roommates.
                    </p>

                    <ProfileHeader userProfile={this.props.userProfile} />                      
                </div>

                <div className="profile-content-container">
                    <div className="profile-content-items">
                        <AboutYou 
                            data={this.state.aboutYou} 
                            editting={this.state.edittingAboutYou} 
                            onEditClick={this.edit}
                            updateContentProfile={this.props.updateContentProfile}
                            userId={this.props.userId}
                        /> 
                        
                    </div>
                    <Sidebar />
                </div>
                </>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        userProfileContent: state.profile.userProfileContent
    }
}

export default connect(mapStateToProps, { updateContentProfile })(ProfilePage);