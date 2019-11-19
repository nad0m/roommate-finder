import React from 'react';
import ProfileHeader2 from '../profile/ProfileHeader';

import '../profile/profile-header.css';

const ProfilePage = (props) => {

    return (
        <div className="profile-container">
            <h1>
                Your Profile
            </h1>
            <p>
                Sharing more information about yourself can help you find more potential roommates.
            </p>

            <ProfileHeader2 userProfile={props.userProfile} />
        </div>
    )
}

export default ProfilePage;