import React from 'react';
import ProfileHeader from '../profile/ProfileHeader';

import '../profile/profile.css';

const ProfilePage = () => {
    return (
        <div className="profile-container">
            <h1>
                Your Profile
            </h1>
            <p>
                Sharing more information about yourself can help you find more potential roommates.
            </p>

            <ProfileHeader />
        </div>


    )
}

export default ProfilePage;