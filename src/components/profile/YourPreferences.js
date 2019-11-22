import React from 'react';
import PreferredLocation from './PreferredLocation';
import ContentHeader from './ContentHeader';
import { YOUR_PREFERENCES } from '../profile/types';

const YourPreferences = ({ disableButton, onEditClick, editting, locationRef }) => {

    disableButton = () => {
        return editting ? "circular ui icon button disabled" : "circular ui icon button";
    }

    return (
        <div id={YOUR_PREFERENCES} className="content-container">
            <ContentHeader 
                title="Your Preferences" 
                disabledStyle={disableButton} 
                onEditClick={() => onEditClick(YOUR_PREFERENCES)} 
            />
                    
            <span>Preferred Location</span>
            <PreferredLocation 
                locationRef={locationRef}
            />

        </div>
    );
}

export default YourPreferences;