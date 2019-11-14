import { 
    SIGN_IN, 
    SIGN_OUT,
    SAVE_AUTH_INSTANCE 
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

export const saveAuthInstance = (instance) => {
    return {
        type: SAVE_AUTH_INSTANCE,
        payload: instance
    };
}

