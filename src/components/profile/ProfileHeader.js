import React from 'react';
import ProfileEditModal from '../../modals/ProfileEditModal';

class ProfileHeader extends React.Component { 
    
    state = {
        editProfile: false
    }

    showModal = () => {
        this.setState({ editProfile: true });
    }

    renderModal = () => {
        if (this.state.editProfile)
            return <ProfileEditModal onDismiss={() => this.setState({ editProfile: false })} />;
    }

    render () {
        return (
            <div className="header-container">
                <button className="circular ui icon button" onClick={this.showModal}> 
                    <i className="icon pencil"></i>
                </button>
                <h2 className="ui icon header" style={{marginTop: '0px'}}>
                    <img src="https://dvokhk8ohqhd8.cloudfront.net/assets/avatars/candidates/butch_cut-8ce1ba744d7a8255518bdda864804fa90ec4dafe0169af4f4ecb2f87d6221d69.svg" alt="blah" className="ui image"/>
                        <div className="content">
                            Adam Nguyen
                            <div className="sub header details">
                                <span className="map-icon">
                                    <i className="birthday cake icon"></i>
                                </span>
                                October 10, 1990 (age 29)
                            </div>
                            <div className="sub header details">
                                <span className="map-icon">
                                    <i className="mini map marker alternate icon"></i>
                                </span>
                                San Jose, California, United States
                            </div>
                            <div className="sub header details">
                                <span className="map-icon">
                                    <i className="mars icon"></i>
                                </span>
                                Male
                            </div>
                        </div>
                </h2>
                {this.renderModal()}
            </div> 
        );
    }
}

export default ProfileHeader;