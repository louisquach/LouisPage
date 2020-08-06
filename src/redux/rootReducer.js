import {combineReducers} from 'redux';
import showScreenReducer from './showScreenReducer.js';
import {reducer as form} from 'redux-form';

// const ACTION = 'SAVE_CLIENT';
// const CLIENT_STATE = {name: '', company:'', email:'', phone:''};
const rootReducer = combineReducers({
    showScreen: showScreenReducer,
    form
});
export default rootReducer;