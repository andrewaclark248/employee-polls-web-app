import { NEW_POLL_TYPE } from '../actions/pollActions.js';


const initialState = {
	allPolls: []
}

export const changePoll = (state = initialState, action) => {
	var newPoll = null;
	var returnVar = null;

	if (action.type == NEW_POLL_TYPE) {
		newPoll = {
			currentUser: action.payload.currentUser,
			firstOption: action.payload.firstOption,
			secondOption: action.payload.secondOption
		}
		var listOfPolls = state.allPolls.concat(newPoll)
		var result = { ...state, allPolls: listOfPolls}
		//console.log("changePoll.js = ", returnVar)
		return result;
	} else {
		return state;
	}


	/***switch(action.type){
		case NEW_POLL_TYPE: 
			return {
				...state,
				allPolls: action.payload
			}
		default: return state
	}****/
}