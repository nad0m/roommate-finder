import React from 'react';
import ProfileHeader from '../profile/ProfileHeader';

import '../profile/profile.css';

const ProfilePage = (props) => {

    return (
        <div className="profile-container">
            <h1>
                Your Profile
            </h1>
            <p>
                Sharing more information about yourself can help you find more potential roommates.
            </p>

            <ProfileHeader userProfile={props.userProfile}/>
        </div>
    )
}

export default ProfilePage;