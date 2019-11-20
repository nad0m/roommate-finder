import React from 'react';
import ProfileHeader from '../profile/ProfileHeader';
import Sidebar from '../profile/Sidebar';

import '../profile/profile-header.css';

const ProfilePage = (props) => {

    return (
        <>
        <div className="black-border">           
            <h1>
                Your Profile
            </h1>
            <p>
                Sharing more information about yourself can help you find more potential roommates.
            </p>

            <ProfileHeader userProfile={props.userProfile} />                      
        </div>

        <div className="profile-content-container">
            <div className="profile-content-items">
                <ProfileHeader userProfile={props.userProfile} />  
                <ProfileHeader userProfile={props.userProfile} />  
                <ProfileHeader userProfile={props.userProfile} />  
                <ProfileHeader userProfile={props.userProfile} />  
                <ProfileHeader userProfile={props.userProfile} />  
                
            </div>
            <Sidebar />
        </div>
        </>
    )
}

export default ProfilePage;