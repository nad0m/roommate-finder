import { SAVE_CURRENT_USER } from '../actions/types';

const INITIAL_STATE = {
    userProfile: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_CURRENT_USER: 
            return {...state, userProfile: action.payload};
        default:
            return state;
    }
}