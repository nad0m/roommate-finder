import React from 'react';
import ProfileEditModal from '../../modals/ProfileEditModal';
import ProfileEdit from './ProfileEdit';
import { dateToString } from '../../util/date-util';

class ProfileHeader extends React.Component { 
    
    state = { editProfile: false };

    showModal = () => {
        this.setState({ editProfile: true });
    }

    renderModal = () => {
        if (this.state.editProfile) {
            return (
                <ProfileEditModal onDismiss={() => this.setState({ editProfile: false })}>
                    <ProfileEdit profile={this.props.userProfile} />
                </ProfileEditModal>
            );
        }
    }

    renderData(type) {
        if (!this.props.userProfile) {
            return;
        }

        switch (type) {
            case 'dob': 
                return this.getDetail("birthday cake icon", dateToString(this.props.userProfile.dob));
            case 'location':
                return this.getDetail("map marker alternate icon", this.props.userProfile.location);
            case 'gender':
                return this.getDetail("mars icon", this.props.userProfile.gender);
            default:
                return;                
        }
    }

    getDetail(iconClass, data) {
        if (!data) {
            return;
        }

        return (
            <div className="details">
                <span className="detail-icon">
                    <i className={iconClass}></i>
                </span>
                {data}
            </div>
        )
    }

    render () {
        return (
            <div className="header-container">
                <button className="circular ui icon button" onClick={this.showModal}> 
                    <i className="icon pencil"></i>
                </button>
                <h2 className="ui icon header" style={{marginTop: '0px'}}>
                    <img src={this.props.userProfile ? this.props.userProfile.photoURL : "https://dvokhk8ohqhd8.cloudfront.net/assets/avatars/candidates/butch_cut-8ce1ba744d7a8255518bdda864804fa90ec4dafe0169af4f4ecb2f87d6221d69.svg"} alt="blah" className="ui image"/>
                        <div className="content">
                            {this.props.userProfile ? this.props.userProfile.displayName : null}
                            {this.renderData('dob')}
                            {this.renderData('location')}
                            {this.renderData('gender')}
                        </div>
                </h2>
                {this.renderModal()}
            </div> 
        );
    }
}

export default ProfileHeader;