import React from 'react';
import EditControls from './EditControls';
import PreferredLocation from './PreferredLocation';
import ContentHeader from './ContentHeader';
import { prefGenderData, houseSizeData, housingTypeData } from '../../util/static-data';
import { YOUR_PREFERENCES } from '../profile/types';
import GenericPicker from './GenericPicker';

const YourPreferences = ({ data, onEditClick, onInputChange, onPrefGenderClick, editting, locationRef, inEditMode, cancel, save }) => {

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
                editting={editting}
                locationRef={locationRef}
                value={data.preferredLocation}
                onInputChange={onInputChange}
            />

            <span>Preferred Gender</span>
            <GenericPicker 
                text={data.preferredGender}
                onButtonClick={onPrefGenderClick}
                editting={editting}
                dataSet={prefGenderData}
            />

            <span>Household Size</span>
            <GenericPicker 
                text={data.housingSize}
                onButtonClick={onPrefGenderClick}
                editting={editting}
                dataSet={houseSizeData}
            />

            <span>Housing Type</span>
            <GenericPicker 
                text={data.housingType}
                onButtonClick={onPrefGenderClick}
                editting={editting}
                dataSet={housingTypeData}
            />
            

        <EditControls editting={editting} cancel={cancel} save={save} type={YOUR_PREFERENCES}/>
        </div>
    );
}

export default YourPreferences;