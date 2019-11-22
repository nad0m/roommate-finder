import { 
    SIGN_IN, 
    SIGN_OUT,
    SAVE_FIREBASE_INSTANCE,
    SAVE_CURRENT_USER,
    SAVE_CURRENT_PROFILE,
    SAVE_AUTH_PROFILE,
    UPDATE_CURRENT_USER_PROFILE,
    UPDATE_CONTENT_PROFILE
} from './types';

import { 
    userSignedIn, 
    getUserProfile, 
    registerNewUser, 
    registerNewProfile, 
    updateProfileHeader,
    updateProfileContent 
} from '../db/firestore';
import { firebaseSignOut } from '../db/auth';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
}

export const signOut = () => async (dispatch) => {
    const userStillSignedIn = await firebaseSignOut(); 

    dispatch({
        type: SIGN_OUT,
        payload: userStillSignedIn
    });
}

export const saveFirebaseInstance = (instance) => {
    return {
        type: SAVE_FIREBASE_INSTANCE,
        payload: instance
    };
}

export const saveCurrentUser = (user) => async (dispatch) => {

    let userData = await userSignedIn(user.uid);
    let success = true;

    // if user data does not exist in db
    if (!userData) {
        userData = {...user, dob: null, location: null, gender: null};
        success = await registerNewUser(userData);
    }

    if (success) {
        dispatch({
            type: SAVE_CURRENT_USER,
            payload: userData
        });
    }
    
}

export const saveCurrentProfile = (user) => async (dispatch) => {

    let profile = await getUserProfile(user.uid);
    let success = true;
    // if profile data does not exist in db
    if (!profile) {
        profile = {
            aboutYou: {  
                budgetLower: null,
                budgetUpper: null,
                occupation: "",
                attributes: []
            }
        };
        success = await registerNewProfile(user.uid, profile);
    }

    if (success) {
        dispatch({
            type: SAVE_CURRENT_PROFILE,
            payload: profile
        });
    }
}

export const saveAuthProfile = (profile) => {
    return {
        type: SAVE_AUTH_PROFILE,
        payload: profile
    };
}

export const updateUserProfile = (profile, callback) => async (dispatch) => {
    const userData = await updateProfileHeader(profile);

    dispatch({
        type: UPDATE_CURRENT_USER_PROFILE,
        payload: userData
    });
    
    if (userData) {
        callback();
    }
}

export const updateContentProfile = (uid, profile) => async (dispatch) => {
    const content = await updateProfileContent(uid, profile);

    if (content) {
        dispatch({
            type: UPDATE_CONTENT_PROFILE,
            payload: content
        });

        return true;
    }
}
