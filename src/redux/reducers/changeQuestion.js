import { initialQuestions } from '../../initialQuestions'
import { CREATE_QUESTION, ANSWER_QUESTION } from './../actions/questionAction.js'

const initialState = {
	questions: initialQuestions
}

export const changeQuestion = (state = initialState, action) => {

    if (action.type == CREATE_QUESTION) {
        console.log("went to question reducer")
        state.questions[action.payload.question.id] = action.payload.question;

        return {
			...state,
			questions: state.questions
		}
    } else if (action.type == ANSWER_QUESTION) {
        //var question = state.questions.filter((question) => {
        //    return question.id == action.type.questionId
        //})
        console.log("went to question reducer")

        if (action.payload.answer == "optionOne") {
            state.questions[action.payload.questionId].optionOne.votes.push(action.payload.authedUser)

        } else if (action.payload.answer == "optionTwo" ) {
            state.questions[action.payload.questionId].optionTwo.votes.push(action.payload.authedUser)
        }

        return {
			...state,
			questions: state.questions
		}

    } else {
        return state;
    }
}

