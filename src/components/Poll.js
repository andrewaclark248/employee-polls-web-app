import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from 'react'
import { _saveQuestionAnswer } from './../DATA.js'
import { ANSWER_QUESTION } from './../redux/actions/questionAction.js'
import { UPDATE_USER_ANSWER } from './../redux/actions/changeUser.js'
import { useNavigate } from 'react-router-dom'
import {questionAnsweredMethod} from "./../utils/util.js"
import { getUserName } from './../utils/util.js'

function Poll(props) {
    const navigate = useNavigate()
  
    let { question_id } = useParams();
    let [pollChoice, setPollChoice] = useState(null);
    let [questionAnswered, setQuestionAnswered] = useState(false);
    let [numberOfVotesForOptionOne, setNumberOfVotesForOptionOne] = useState(0);
    let [percentageVoteForAnswerOne, setPercentageVoteForOptionOne] = useState(0);
    let [numberOfVotesForOptionTwo, setNumberOfVotesForOptionTwo] = useState(0);
    let [percentageVoteForAnswerTwo, setPercentageVoteForOptionTwo] = useState(0);

    var currentQuestion = null;
    Object.keys(props.questions).forEach((key) => {
        var question = props.questions[key]
        if (question.id == question_id){
            currentQuestion = question;
            //console.log("currentQuestion = ", currentQuestion.optionOne.votes)
        }
    })
    if (currentQuestion == null) {
        setTimeout(()=>{
            navigate('/error');
          }, 100)
        return;
    }

    let options = [
        { value: "optionOne", label: currentQuestion.optionOne.text },
        { value: "optionTwo", label: currentQuestion.optionTwo.text }
      ]



    useEffect(() => {
        var result = questionAnsweredMethod(currentQuestion, props.currentUser)

        if (result == true) {
            setQuestionAnswered(true)

            setNumberOfVotesForOptionOne(currentQuestion.optionOne.votes.length.toString())
            setNumberOfVotesForOptionTwo(currentQuestion.optionTwo.votes.length.toString())

            var resultOptionOne = percentageVotedForAnswer(currentQuestion, "optionOne")
            setPercentageVoteForOptionOne(resultOptionOne)

            var resultOptionTwo = percentageVotedForAnswer(currentQuestion, "optionTwo")
            setPercentageVoteForOptionTwo(resultOptionTwo)

        } 

    }, [props.questions])
    
    var getAuthor = props.allUsers[currentQuestion.author]

    var pollChoice2 = votedForWhichOption(currentQuestion, props.currentUser);

    return (
        <div >
            <h1 className="">Show Poll</h1>
            <div className="row bottom-padding">
                <div className="col-4"></div>
                <div className="col-4">
                    <span>Author: <span className='fw-bold'>{getUserName(props.currentUser)}</span></span>
                    <br></br>
                    <img src={getAuthor.avatarURL} height={100} width={100} />
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="pb-3">
                    <center>
                        <h5>Would You Rather?</h5>
                    </center>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col-2"></div>
                <div className="col-8">
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
                                <div className="row">
                                    <label className="">First Choice <span className="text-danger px-5 fw-bold">{pollChoice2 == "optionOne" ? "You Voted For Option One": null}</span></label>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <input className="form-control"  disabled={true} value={currentQuestion.optionOne.text}/>
                                    </div>
                                    <div className="col-4">
                                        <button disabled={questionAnswered} className="btn btn-primary" onClick={() => { anwserPoll(props, props.currentUser, currentQuestion.id, "optionOne", navigate); setQuestionAnswered(true); setPollChoice("optionOne"); }}>
                                            Option One
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-3">
                                <div className="row">
                                    <label className="">Second Choice <span className="text-danger px-5 fw-bold">{pollChoice2 == "optionTwo" ? "You Voted For Option Two": null}</span></label>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <input className="form-control"  disabled={true} value={currentQuestion.optionTwo.text}/>
                                    </div>
                                    <div className="col-4">
                                        <button disabled={questionAnswered} className="btn btn-primary" onClick={() => { anwserPoll(props, props.currentUser, currentQuestion.id, "optionTwo", navigate); setQuestionAnswered(true); setPollChoice("optionTwo"); }}>
                                            Option Two
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-2"></div>
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
                                <div className="row">
                                    <h5>Option One</h5>
                                    <div className="row pb-3">
                                        <div className="col-8">
                                            <span>
                                                No. of people who voted for <span className="fw-bold"><u>Option One</u></span> answer: 
                                            </span>
                                        </div>
                                        <div className="col-4">
                                            <span className="fw-bold">
                                                {numberOfVotesForOptionOne}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <span>
                                                Percent of people who voted for <span className="fw-bold"><u>Option One</u></span> answer: 
                                            </span>
                                        </div>
                                        <div className="col-4">
                                            <span className="fw-bold">
                                                {percentageVoteForAnswerOne}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <h5>Option Two</h5>
                                    <div className="row pb-3">
                                        <div className="col-8">
                                            <span>
                                                No. of people who voted for <span className="fw-bold"><u>Option Two</u></span> answer: 
                                            </span>
                                        </div>
                                        <div className="col-4">
                                            <span className="fw-bold">
                                                {numberOfVotesForOptionTwo}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <span>
                                                Percent of people who voted for <span className="fw-bold"><u>Option Two</u></span> answer: 
                                            </span>
                                        </div>
                                        <div className="col-4">
                                            <span className="fw-bold">
                                                {percentageVoteForAnswerTwo}%
                                            </span>
                                        </div>
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
    console.log("percentage = ", currentQuestion)
    var demoninator = currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length
    var numerator = (pollChoice == "optionOne" ? currentQuestion.optionOne.votes.length : currentQuestion.optionTwo.votes.length)
    var percentage = (numerator/demoninator)*100
    return percentage;
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

function votedForWhichOption(question, currentUser) {
    if (question.optionOne.votes.includes(currentUser)) {
        return "optionOne"
    } else if (question.optionTwo.votes.includes(currentUser)) {
        return "optionTwo"
    } else {
        return "none"
    }
}



export default connect((state) => ({
    allUsers: state.users.allUsers,
    currentUser: state.loginUser.currentUser,
    questions: state.questions.questions
  }))(Poll);