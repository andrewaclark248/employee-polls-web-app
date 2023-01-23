import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Select from 'react-select'
import { useState } from 'react'
import { _saveQuestionAnswer } from './../DATA.js'
import { ANSWER_QUESTION } from './../redux/actions/questionAction.js'
import { UPDATE_USER_ANSWER } from './../redux/actions/changeUser.js'

function Poll(props) {
    let { question_id } = useParams();
    let [pollChoice, setPollChoice] = useState(null);

    var currentQuestion = null;
    var questionAnswered = null;
    Object.keys(props.questions).forEach((key) => {
        var question = props.questions[key]
        if (question.id == question_id){
            currentQuestion = question;
        }
    })

    let options = [
        { value: "optionOne", label: currentQuestion.optionOne.text },
        { value: "optionTwo", label: currentQuestion.optionTwo.text }
      ]

    questionAnswered = questionAnsweredMethod(currentQuestion, props.currentUser)

    return (
        <div>
            <h1 className="">Show Poll</h1>
            <div className="row bottom-padding">
            <div className="col-4"></div>
            <div className="col-4">
                <span>Current User: <span className='fw-bold'>{props.currentUser}</span></span>
            </div>
            <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            Answer Poll
                        </div>
                        <div className="card-body">
                            <div className="pb-3">
                                <label className="">Poll ID</label>
                                <input className="form-control"  disabled={true} value={currentQuestion.id}/>
                            </div>
                            <div className="pb-3">
                                <label className="">First Choice</label>
                                <input className="form-control"  disabled={true} value={currentQuestion.optionOne.text}/>
                            </div>
                            <div className="pb-3">
                                <label className="">Second Choice</label>
                                <input className="form-control"  disabled={true} value={currentQuestion.optionTwo.text}/>
                            </div>
                            <div className="pb-3">
                                <Select isDisabled={questionAnswered} options={options} onChange={(e) => setPollChoice(e.value)} />
                            </div>
                            <div className="pb-3">
                                <button className="btn btn-primary" onClick={() => { anwserPoll(props, props.currentUser, currentQuestion.id, pollChoice)  }}>Update Poll</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );

}

function questionAnsweredMethod(question, currentUser) {
    var optOne = question.optionOne.votes.includes(currentUser)
    var optTwo = question.optionTwo.votes.includes(currentUser)
    //console.log("optOne = ", question.optionOne.votes)
    //console.log("optionTwo = ", question.optionTwo.votes)

    //console.log("optOne = " + optOne)
    //console.log("optTwo = " + optTwo)
    if (optOne || optTwo) {
        return true;
    } else {
        return false;
    }
}

//validation
async function anwserPoll(props, authedUser, qid, answer) {
    if (answer != "") {
        var result = await _saveQuestionAnswer({authedUser, qid, answer})
        if (result) {
            props.dispatch({type: ANSWER_QUESTION, payload: {questionId: qid, authedUser: authedUser, answer: answer}})
            props.dispatch({type: UPDATE_USER_ANSWER, payload: {questionId: qid, authedUser: authedUser, answer: answer}})
        }
    }
}  

export default connect((state) => ({
    currentUser: state.loginUser.currentUser,
    questions: state.questions.questions
  }))(Poll);