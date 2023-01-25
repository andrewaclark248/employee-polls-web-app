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
        //var question = state.questions.filter((question) => {
        //    return question.id == action.type.questionId
        //})
        var updatedQuestions = {...state.questions}
        if (action.payload.answer == "optionOne") {
            updatedQuestions[action.payload.questionId].optionOne.votes.push(action.payload.authedUser)
        } else if (action.payload.answer == "optionTwo" ) {
            updatedQuestions[action.payload.questionId].optionTwo.votes.push(action.payload.authedUser)
        }

        return {
			...state,
			questions: updatedQuestions
		}

    } else {
        return state;
    }
}

