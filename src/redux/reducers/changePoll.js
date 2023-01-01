import { NEW_POLL_TYPE, UPDATE_POLL_TYPE } from '../actions/pollActions.js';


const initialState = {
	allPolls: []
}

export const changePoll = (state = initialState, action) => {
	var newPoll = null;
	var returnVar = null;

	if (action.type == NEW_POLL_TYPE) {
		newPoll = {
			pollName: action.payload.pollName,
			currentUser: action.payload.currentUser,
			firstOption: action.payload.firstOption,
			secondOption: action.payload.secondOption,
			answer: "none"
		}
		var listOfPolls = state.allPolls.concat(newPoll)
		var result = { ...state, allPolls: listOfPolls}
		//console.log("changePoll.js = ", returnVar)
		return result;
	} else if (action.type == UPDATE_POLL_TYPE) {
		var updatedPoll = state.allPolls.filter((poll) => {
			return poll.pollName == action.payload.pollName
		})[0]
		updatedPoll.answer = action.payload.pollChoice
		
		var allUserPolls = state.allPolls.filter((poll) => {
			return poll.pollName != action.payload.pollName
		})

		var listOfPolls = allUserPolls.concat(updatedPoll)
		var result = { ...state, allPolls: listOfPolls}
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