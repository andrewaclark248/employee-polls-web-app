import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { _getQuestions } from './../DATA.js'
import { useEffect, useState } from "react";

function Home(props) { 
    const navigate = useNavigate();
    let [showUnansweredQuestions, setShowUnansweredQuestions] = useState(true)
    let [showAnsweredQuestions, setShowAnsweredQuestions] = useState(false)

    var unansweredQuestions = getUnansweredQuestions(props.questions, props.currentUser)
    var answeredQuestions = getAnsweredQuestions(props.questions, props.currentUser)
  

    var sortedUnansweredQuestions = sortQuestions(unansweredQuestions)
    var sortedAnsweredQuestions = sortQuestions(answeredQuestions)


    return (
      <div>
          <center>
            <div className="bottom-padding">
              <h1>Home Page</h1>
              <span>Current User: {props.currentUser} </span>

            </div>
          </center>
          <div className="row pb-5">
            <div className="col-4"></div>
            <div className="col-4">
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" onClick={() => {
                  setShowUnansweredQuestions(!showUnansweredQuestions)
                  setShowAnsweredQuestions(!showAnsweredQuestions)
                }}>{showUnansweredQuestions ? "Show Answered Polls" : "Show Unanswered Polls" }</button>
              </div>            
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row">
            <div className="col-2"></div>

            <div className="col-4">
              {showUnansweredQuestions && 
                <div className="card" >
                  <div className="card-header text-white bg-primary">Unawnsered Polls</div>
                  <div className="card-body">

                    <div className="">
                    {showUnansweredQuestions && 
                      sortedUnansweredQuestions != null && sortedUnansweredQuestions[0] != undefined &&
                        sortedUnansweredQuestions.map((question, index) => {
                          return (<div className="row pb-3" key={index}>
                            <div className="col-2">
                              <span className="text-dark">{(index+1).toString()}.</span>
                            </div>
                            <div className="col-4">
                              <span className="text-dark">{question.id}</span>
                            </div>
                            <div className="col-3">
                              <span className="text-dark">{new Date(question.timestamp).toDateString()}</span>
                            </div>
                            <div className="col-3">
                              <button className="btn btn-primary" onClick={() => { props.setPollPage("unAnsweredQuestion"); navigate('/questions/'+question.id); }}> Show Poll</button>
                            </div>
                          </div>)
                        })
                    }
                    </div>
                  </div>
                </div>
              }




            </div>

            <div className="col-4">
              {showAnsweredQuestions && 
                <div className="card" >
                  <div className="card-header text-white bg-primary">Awnsered Polls</div>
                  <div className="card-body">

                    <div className="">
                      {sortedAnsweredQuestions != null && sortedAnsweredQuestions[0] != undefined &&
                              sortedAnsweredQuestions.map((question, index) => {
                                return (<div className="row pb-3" key={index}>
                                  <div className="col-2">
                                    <span className="text-dark">{(index+1).toString()}.</span>
                                  </div>
                                  <div className="col-4">
                                    <span className="text-dark">{question.id}</span>
                                  </div>
                                  <div className="col-3">
                                    <span className="text-dark">{new Date(question.timestamp).toDateString()}</span>
                                  </div>
                                  <div className="col-3">
                                    <button className="btn btn-primary" onClick={() => { props.setPollPage("answeredQuestion"); navigate('/questions/'+question.id); }}> Show Poll</button>
                                  </div>
                                </div>)
                              })
                      }
                    </div>

                  </div>
                </div>
              }

            </div>
            <div className="col-2"></div>
          </div>

      </div>
    );
  }


function sortQuestions(questions) {
  questions.sort((a, b) => {
    return (b.timestamp - a.timestamp)
  })
  return questions;
}


async function getQuestions() {
  _getQuestions.then((data) => {
    console.log("get questions", data)
  })
  .catch((error) => {
    console.log("error", error)
  })
}

function getUnansweredQuestions(questions, currentUser) {
  var questionKeys = Object.keys(questions)
  var unansweredQuestions = questionKeys.map((questionKey) => {
    var question = questions[questionKey]
    if (!question.optionOne.votes.includes(currentUser) && !question.optionTwo.votes.includes(currentUser)) {
      return question;
    }
  })
  //remove undefineds
  unansweredQuestions = unansweredQuestions.filter((question) => {
    return question != undefined
  })
  return unansweredQuestions;
}

function getAnsweredQuestions(questions, currentUser) {
  var questionKeys = Object.keys(questions)
  var answeredQuestions = questionKeys.map((questionKey) => {
    var question = questions[questionKey]
    if (question.optionOne.votes.includes(currentUser) || question.optionTwo.votes.includes(currentUser)) {
      return question;
    } else {
      return
    }
  })
  //remove undefineds
  answeredQuestions = answeredQuestions.filter((question) => {
    return question != undefined
  })
  return answeredQuestions;
}
  
export default connect((state) => ({
  allUsers: state.users.allUsers,
  currentUser: state.loginUser.currentUser,
  questions: state.questions.questions
}))(Home);