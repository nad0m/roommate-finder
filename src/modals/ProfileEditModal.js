import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar/Navbar';

const ProfileEditModal = (props) => {

    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <Navbar />
        </div>,
        document.querySelector("#modal")
    );

}

export default ProfileEditModal;