import { 
    SIGN_IN, 
    SIGN_OUT,
    SAVE_FIREBASE_INSTANCE,
    SAVE_CURRENT_USER,
    SAVE_AUTH_PROFILE
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}

export const saveFirebaseInstance = (instance) => {
    return {
        type: SAVE_FIREBASE_INSTANCE,
        payload: instance
    };
}

export const saveCurrentUser = (user) => {
    return {
        type: SAVE_CURRENT_USER,
        payload: user
    };
}

export const saveAuthProfile = (profile) => {
    return {
        type: SAVE_AUTH_PROFILE,
        payload: profile
    };
}
