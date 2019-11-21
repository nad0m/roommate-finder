import { 
    SAVE_CURRENT_USER, 
    SAVE_CURRENT_PROFILE, 
    UPDATE_CURRENT_USER_PROFILE, 
    UPDATE_CONTENT_PROFILE } from '../actions/types';

const INITIAL_STATE = {
    userProfile: null,
    userProfileContent: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_CURRENT_USER: 
            return {...state, userProfile: action.payload};
        case SAVE_CURRENT_PROFILE: 
            return {...state, userProfileContent: action.payload};
        case UPDATE_CURRENT_USER_PROFILE:
            return {...state, userProfile: {...state.userProfile, ...action.payload}};
        case UPDATE_CONTENT_PROFILE:
            return {...state, userProfileContent: {...state.userProfileContent, ...action.payload}};
        default:
            return state;
    }
}