import { combineReducers } from 'redux';
import { loginUserReducer } from './loginUserReducer.js';

const rootReducer = combineReducers({
	loginUser: loginUserReducer
})

export default rootReducer;
