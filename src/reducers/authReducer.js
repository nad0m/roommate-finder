import { SIGN_IN, SIGN_OUT, SAVE_AUTH_PROFILE} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    authProfile: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN: 
            return {...state, isSignedIn: true, userId: action.payload};
        case SIGN_OUT: 
            return {...state, isSignedIn: false, userId: null};
        case SAVE_AUTH_PROFILE: 
            return {...state, authProfile: action.payload};
        default:
            return state;
    }
}