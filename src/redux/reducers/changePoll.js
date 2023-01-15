import { NEW_POLL_TYPE, UPDATE_POLL_TYPE } from '../actions/pollActions.js';
import { v4 as uuidv4 } from 'uuid';
import { allUsers } from '../../allUsers.js';


const initialState = {
	originalPolls: [],
	userPolls: []
}

export const changePoll = (state = initialState, action) => {
	var newPoll = null;
	var returnVar = null;


	if (action.type == NEW_POLL_TYPE) {

		let pollId = uuidv4();
		let createdUserPolls = createPollForEachUser(state, action, pollId)
		var listOfUserPolls = state.userPolls.concat(createdUserPolls)

		newPoll = {
			id: pollId,
			pollName: action.payload.pollName,
			currentUser: action.payload.currentUser,
			firstOption: action.payload.firstOption,
			secondOption: action.payload.secondOption,
			//answer: "cant-have-answer",
			createdAt: new Date().toLocaleString()
		}
		var listOfPolls = state.originalPolls.concat(newPoll)
		var result = { ...state, originalPolls: listOfPolls, userPolls: listOfUserPolls}

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

function createPollForEachUser(state, action, pollId) {
	let userPolls = []
	allUsers.map((user) => {
		let newPoll = {
			currentUser: user,
			originalPollId: pollId,
			id: uuidv4(),
			pollName: action.payload.pollName,
			firstOption: action.payload.firstOption,
			secondOption: action.payload.secondOption,
			answer: "none",
			createdAt: new Date().toLocaleString()
		}
		userPolls.push(newPoll)
	})
	return userPolls;
}