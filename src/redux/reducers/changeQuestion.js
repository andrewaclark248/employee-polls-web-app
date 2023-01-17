import { initialQuestions } from '../../initialQuestions'
import { CREATE_QUESTION, ANSWER_QUESTION } from './../actions/questionAction.js'

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
    } else if (action.type == ANSWER_QUESTION) {

    } else {
        return state;
    }
}

