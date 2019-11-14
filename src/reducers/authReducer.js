import { SIGN_IN, SIGN_OUT, SAVE_AUTH_INSTANCE } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN: 
            return {...state, isSignedIn: true, userId: action.payload};
        case SIGN_OUT: 
            return {...state, isSignedIn: false, userId: null};
        case SAVE_AUTH_INSTANCE: 
            return {...state, authInstance: action.payload};
        default:
            return state;
    }
}