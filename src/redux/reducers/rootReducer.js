import { combineReducers } from 'redux';
import { loginUserReducer } from './loginUserReducer.js';
import { changePage } from './changePage.js';


const rootReducer = combineReducers({
	changePage: changePage
})

export default rootReducer;
