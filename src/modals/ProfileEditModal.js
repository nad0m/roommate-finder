import React from 'react';
import ReactDOM from 'react-dom';
import ProfileEdit from '../components/profile/ProfileEdit';

const ProfileEditModal = (props) => {

    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <ProfileEdit />
        </div>,
        document.querySelector("#modal")
    );

}

export default ProfileEditModal;