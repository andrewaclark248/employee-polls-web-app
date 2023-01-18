import { combineReducers } from 'redux';

import { loginUser } from './loginUser.js';
import { changeUser } from './changeUser.js'
import { changeQuestion } from './changeQuestion.js' 

const rootReducer = combineReducers({
	loginUser: loginUser,
	users: changeUser,
	questions: changeQuestion
})

export default rootReducer;
