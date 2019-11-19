import { SAVE_CURRENT_USER, UPDATE_CURRENT_USER_PROFILE } from '../actions/types';

const INITIAL_STATE = {
    userProfile: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_CURRENT_USER: 
            return {...state, userProfile: action.payload};
        case UPDATE_CURRENT_USER_PROFILE:
            return {...state, userProfile: {...state.userProfile, ...action.payload}}
        default:
            return state;
    }
}