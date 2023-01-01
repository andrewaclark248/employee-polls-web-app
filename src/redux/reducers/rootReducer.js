import { combineReducers } from 'redux';
import { loginUser } from './loginUser.js';
import { changePage } from './changePage.js';


const rootReducer = combineReducers({
	changePage: changePage,
	loginUser: loginUser
})

export default rootReducer;
