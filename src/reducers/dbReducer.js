import { SAVE_FIREBASE_INSTANCE } from '../actions/types';

const INITIAL_STATE = {
    firebase: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_FIREBASE_INSTANCE: 
            return {...state, firebase: action.payload};
        default:
            return state;
    }
}