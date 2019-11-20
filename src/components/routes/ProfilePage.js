import React from 'react';
import ProfileHeader from '../profile/ProfileHeader';
import AboutYou from '../profile/AboutYou';
import Sidebar from '../profile/Sidebar';

import '../profile/profile-header.css';

class ProfilePage extends React.Component {

    state = {
        edittingAboutYou: false
    }

    edit = (form) => {
        switch (form) {
            case 'about-you':
                this.setState({edittingAboutYou: true});
                break;
            default:
                break;
        }
    }

    render() {
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
                            data={{budget: {budgetLower: 2000,budgetUpper: 3000}}} 
                            editting={this.state.edittingAboutYou} 
                            onEditClick={this.edit}
                        /> 
                        <ProfileHeader userProfile={this.props.userProfile} />  
                        <ProfileHeader userProfile={this.props.userProfile} />  
                        <ProfileHeader userProfile={this.props.userProfile} />  
                        <ProfileHeader userProfile={this.props.userProfile} />  
                        
                    </div>
                    <Sidebar />
                </div>
                </>
        );
    }
    
}

export default ProfilePage;