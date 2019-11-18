import { 
    SIGN_IN, 
    SIGN_OUT,
    SAVE_FIREBASE_INSTANCE,
    SAVE_CURRENT_USER,
    SAVE_AUTH_PROFILE
} from './types';

import { userSignedIn, registerNewUser } from '../db/firestore';
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

    dispatch({
        type: SAVE_CURRENT_USER,
        payload: null
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

    // if user data does not exist in db
    if (!userData) {
        userData = {...user, id: user.uid, dob: null, location: null, gender: null};
        registerNewUser(userData);
    }

    dispatch({
        type: SAVE_CURRENT_USER,
        payload: userData
    });
}

export const saveAuthProfile = (profile) => {
    return {
        type: SAVE_AUTH_PROFILE,
        payload: profile
    };
}

export const updateUserProfile = (profile) => {
    
}
