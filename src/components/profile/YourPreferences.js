import React from 'react';
import PreferredLocation from './PreferredLocation';
import ContentHeader from './ContentHeader';
import { YOUR_PREFERENCES } from '../profile/types';

const YourPreferences = ({ onEditClick, editting, locationRef, inEditMode }) => {

    const disableButton = () => {
        return editting ? "circular ui icon button disabled" : "circular ui icon button";
    }

    const shouldUnfocus = () => {
        return !editting && inEditMode ? "content-container unfocused" : "content-container";
    }

    return (
        <div id={YOUR_PREFERENCES} className={shouldUnfocus()}>
            <ContentHeader 
                title="Your Preferences" 
                disabledStyle={disableButton()} 
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