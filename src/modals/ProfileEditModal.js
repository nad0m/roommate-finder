import React from 'react';
import ReactDOM from 'react-dom';

const ProfileEditModal = (props) => {

    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" style={{height: '100%'}}>
            {props.children}
        </div>,
        document.querySelector("#modal")
    );

}

export default ProfileEditModal;