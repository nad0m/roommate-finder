import React from 'react';
import ProfileEditModal from '../../modals/ProfileEditModal';
import ProfileEdit from './ProfileEdit';
import { dateToString } from '../../util/date-util';

class ProfileHeader extends React.Component { 

    state = { editProfile: false };

    showModal = () => {
        this.setState({ editProfile: true });
    }

    hideModal = () => {
        this.setState({ editProfile: false });
    }

    renderModal = () => {
        if (this.state.editProfile) {
            return (
                <ProfileEditModal onDismiss={this.hideModal}>
                    <ProfileEdit profile={this.props.userProfile} hideModal={this.hideModal} />
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
                return this.parseDOB(dateToString(this.props.userProfile.dob));
            case 'location':
                return this.parseLocation(this.props.userProfile.location);
            case 'gender':
                return this.parseGender(this.props.userProfile.gender);
            default:
                return;                
        }
    }

    parseGender(gender) {
        switch (gender) {
            case 'Male':
                return 'He / Him / His ';
            case 'Female':
                return 'She / Her / Hers ';
            case 'Neutral':
                return 'They / Them / Theirs ';
            default:
                break;
        }
    }

    parseLocation(location) {
        if (!location)
            return "";
        
        return (
            <React.Fragment>
                <i className="map marker alternate icon"></i>
                Lives in
                <span> {this.props.userProfile.location}</span>
            </React.Fragment>
        );
    }

    parseDOB(dob) {
        if (!dob)
            return "";
        
        return (
            <React.Fragment>
                <i className="birthday cake icon"></i>
                Born on
                <span> {dateToString(this.props.userProfile.dob)}</span>
            </React.Fragment>
        );
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

    render() {
        return (
            <div className="container-header-profile">
                <div className="portrait">
                <img src={this.props.userProfile ? this.props.userProfile.photoURL : "https://dvokhk8ohqhd8.cloudfront.net/assets/avatars/candidates/butch_cut-8ce1ba744d7a8255518bdda864804fa90ec4dafe0169af4f4ecb2f87d6221d69.svg"} alt="blah" />
                    
                </div>
                <div className="details-profile">
                    <div className="header-container-profile">
                        <div className="header">
                            <h2>
                                {this.props.userProfile ? this.props.userProfile.displayName : null}
                            </h2>
                            <span>
                                {this.renderData('gender')}
                            </span>
                        </div>      
                        <div className="edit">
                            <button className="circular ui icon button" onClick={this.showModal}>
                                <i className="pencil icon"></i>
                            </button>
                        </div>
                    </div>
                    <div className="detail">
                        {this.renderData('dob')}
                    </div>
                    <div className="detail">
                        {this.renderData('location')}
                    </div>
                </div>
                {this.renderModal()}
            </div>
        );
    }
}

export default ProfileHeader;