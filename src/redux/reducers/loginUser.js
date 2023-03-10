import { LOGIN_TYPE } from '../actions/loginUserAction.js';


const initialState = {
	currentUser: "none"
}

export const loginUser = (state = initialState, action) => {

	switch(action.type){
		case LOGIN_TYPE: 
			return {
				...state,
				currentUser: action.payload
			}
		default: return state
	}
}

