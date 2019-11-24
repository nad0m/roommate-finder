import React from 'react';
import { dateToString } from '../../util/date-util';

class ProfileHeader extends React.Component { 

    renderData(type) {
        if (!this.props.data) {
            return;
        }

        switch (type) {
            case 'dob': 
                return this.parseDOB(dateToString(this.props.data.dob));
            case 'location':
                return this.parseLocation(this.props.data.location);
            case 'gender':
                return this.parseGender(this.props.data.gender);
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
                <span> {this.props.data.location}</span>
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
                <span> {dateToString(this.props.data.dob)}</span>
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
                <img src={this.props.data ? this.props.data.photoURL : "https://dvokhk8ohqhd8.cloudfront.net/assets/avatars/candidates/butch_cut-8ce1ba744d7a8255518bdda864804fa90ec4dafe0169af4f4ecb2f87d6221d69.svg"} alt="blah" />
                    
                </div>
                <div className="details-profile">
                    <div className="header-container-profile">
                        <div className="header">
                            <h2>
                                {this.props.data ? this.props.data.displayName : null}
                            </h2>
                            <span>
                                {this.renderData('gender')}
                            </span>
                        </div>      
                        <div className="edit">
                            <button className="circular ui icon button" onClick={this.props.showModal}>
                                <i className="pencil icon blue"></i>
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
            </div>
        );
    }
}

export default ProfileHeader;