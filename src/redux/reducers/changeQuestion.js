import { initialQuestions } from '../../initialQuestions'
import { CREATE_QUESTION } from './../actions/questionAction.js'

const initialState = {
	questions: initialQuestions
}

export const changeQuestion = (state = initialState, action) => {

    if (action.type == CREATE_QUESTION) {
        state.questions[action.payload.question.id] = action.payload.question;

        return {
			...state,
			questions: state.questions
		}
    } else {
        return state;
    }
}

