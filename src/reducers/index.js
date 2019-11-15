import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dbReducer from './dbReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    auth: authReducer,
    db: dbReducer,
    profile: profileReducer
});