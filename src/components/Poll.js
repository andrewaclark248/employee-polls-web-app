import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Select from 'react-select'
import { useState, useEffect } from 'react'
import { _saveQuestionAnswer } from './../DATA.js'
import { ANSWER_QUESTION } from './../redux/actions/questionAction.js'
import { UPDATE_USER_ANSWER } from './../redux/actions/changeUser.js'
import { useNavigate } from 'react-router-dom'

function Poll(props) {
    const navigate = useNavigate()

    let { question_id } = useParams();
    let [pollChoice, setPollChoice] = useState(null);
    let [questionAnswered, setQuestionAnswered] = useState(false);
    let [numberOfVotesForOption, setNumberOfVotesForOption] = useState(0);
    let [percentageVoteForAnswer, setPercentageVoteForAnswer] = useState(0);

    var currentQuestion = null;
    Object.keys(props.questions).forEach((key) => {
        var question = props.questions[key]
        if (question.id == question_id){
            currentQuestion = question;
            //console.log("currentQuestion = ", currentQuestion.optionOne.votes)
        }
    })

    let options = [
        { value: "optionOne", label: currentQuestion.optionOne.text },
        { value: "optionTwo", label: currentQuestion.optionTwo.text }
      ]



    useEffect(() => {
        var result = questionAnsweredMethod(currentQuestion, props.currentUser)

        if (result == true) {
            setQuestionAnswered(true)
            //userAnswer = getUserAnswer(currentQuestion, questionAnswered, props.currentUser) 
            if (pollChoice == "optionOne") {
                setNumberOfVotesForOption(currentQuestion.optionOne.votes.length.toString());
            } else {
                setNumberOfVotesForOption(currentQuestion.optionTwo.votes.length.toString());
            }
            var result = percentageVotedForAnswer(currentQuestion, pollChoice)
            setPercentageVoteForAnswer(result)
        } 

    }, [props.questions])
    




    //var userWithSameAnswer = numberOfPeopleWhoVotedForPoll(getPoll);
    //var precentVote = percentageOfPeopleWhoVotedForPoll(userWithSameAnswer);
    var userAnswer = null;


    return (
        <div >
            <h1 className="">Show Poll</h1>
            <div className="row bottom-padding">
            <div className="col-4"></div>
            <div className="col-4">
                <span>Current User: <span className='fw-bold'>{props.currentUser}</span></span>
            </div>
            <div className="col-4"></div>
            </div>
            <div className="row pb-5">
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
                            {!questionAnswered &&
                                <div className="pb-3">
                                    <Select options={options} onChange={(e) => setPollChoice(e.value)} />
                                </div>
                            }

                            <div className="pb-3">
                                <button className="btn btn-primary" onClick={() => { anwserPoll(props, props.currentUser, currentQuestion.id, pollChoice, navigate); setQuestionAnswered(true)  }}>Update Poll</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-3"></div>
            </div>

            {questionAnswered &&
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                Poll Stats
                            </div>
                            <div className="card-body">
                                <div className="row pb-3">
                                    <div className="col-8">
                                        <span>
                                            No. of people who voted for <span className="fw-bold"><u>{pollChoice}</u></span> answer: 
                                        </span>
                                    </div>
                                    <div className="col-4">
                                        <span className="fw-bold">
                                            {numberOfVotesForOption}
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <span>
                                            Percent of people who voted for <span className="fw-bold"><u>{pollChoice}</u></span> answer: 
                                        </span>
                                    </div>
                                    <div className="col-4">
                                        <span className="fw-bold">
                                            {percentageVoteForAnswer}%
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            }



        </div>
    );

}

function percentageVotedForAnswer(currentQuestion, pollChoice) {
    var demoninator = currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length
    var numerator = (pollChoice == "optionOne" ? currentQuestion.optionOne.votes.length : currentQuestion.optionTwo.votes.length)
    var percentage = (numerator/demoninator)*100
    return percentage;
}

function questionAnsweredMethod(question, currentUser) {
    var isTrue = false;
    question.optionOne.votes.forEach((user) => {
        //console.log("user = " + user)
    })
    var optOne = question.optionOne.votes.includes(currentUser)
    var optTwo = question.optionTwo.votes.includes(currentUser)
    //onsole.log("currentUser = ", currentUser)
    //console.log("optOne = ", typeof question.optionOne.votes)
    //console.log("optTwo = ", question.optionTwo.votes)
    //console.log("question = ", question.optionOne.votes.length)

    if (optOne || optTwo) {
        return true;
    } else {
        return false;
    }
}

//validation
async function anwserPoll(props, authedUser, qid, answer, navigate) {
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