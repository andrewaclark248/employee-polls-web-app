import { initialUsers } from './../../initialUsers.js'
import { UPDATE_USER_ANSWER } from './../actions/changeUser.js'

const initialState = {
	allUsers: initialUsers
}

export const changeUser = (state = initialState, action) => {

    if (action.type == UPDATE_USER_ANSWER) {
        var qid = action.payload.questionId;
        console.log(state.allUsers[action.payload.authedUser].answers)
        state.allUsers[action.payload.authedUser].answers[qid] = action.payload.answer
        
        return {
			...state,
			allUsers: state.allUsers
		}
    }
    return state
}

