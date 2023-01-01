import { combineReducers } from 'redux';
import { loginUser } from './loginUser.js';
import { changePage } from './changePage.js';
import { changePoll } from './changePoll.js';


const rootReducer = combineReducers({
	changePage: changePage,
	loginUser: loginUser,
	polls: changePoll
})

export default rootReducer;
