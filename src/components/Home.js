import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { _getQuestions } from './../DATA.js'
import { useEffect } from "react";

function Home(props) { 
    const navigate = useNavigate();
    console.log("questions = ", props.questions["8xf0y6ziyjabvozdd253nd"])

    var unansweredQuestions = getUnansweredQuestions(props.questions, props.currentUser)
    var answeredQuestions = getAnsweredQuestions(props.questions, props.currentUser)

    //await getQuestions()
    /**
    var userUnansweredPolls = null;
    var userAnwseredPolls = null;
    if (props.userPolls?.length > 0) {
      var currentUserPolls = props.userPolls.filter((poll) => {
        return poll.user == props.currentUser;
    })

      userUnansweredPolls = unansweredPolls(currentUserPolls, props.currentUser)
      userAnwseredPolls = awnseredPolls(currentUserPolls, props.currentUser)
    }

    //sort unawnsered polls
    let sortedUserUnansweredPolls = userUnansweredPolls?.sort((a, b) =>  {return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()})

    //sort awnsered polls
    let sortedUserAnwseredPolls = userAnwseredPolls?.sort((a, b) =>  {return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()})

    //pretty user name
    var userName = getUserNamePretty(props.currentUser)

    //get avatar
    var picture = getAvatar(props.currentUser)
     */

    return (
      <div>
          <center>
            <div className="bottom-padding">
              <h1>Home Page</h1>
              <span>Current User: {props.currentUser} </span>

            </div>
          </center>

          <div className="row">
            <div className="col-2"></div>

            <div className="col-4">
              <div className="card" >
                <div className="card-header text-white bg-primary">Unawnsered Polls</div>
                <div className="card-body">

                  <div className="">
                    {unansweredQuestions != null && unansweredQuestions[0] != undefined &&
                          unansweredQuestions.map((question, index) => {
                            return (<div className="row pb-3" key={index}>
                              <div className="col-2">
                                <span className="text-dark">{(index+1).toString()}.</span>
                              </div>
                              <div className="col-5">
                                <span className="text-dark">{question.id}</span>
                              </div>
                              <div className="col-5">
                                <button className="btn btn-primary" onClick={() => { navigate('/answer-poll/'+question.id); }}> Show Poll</button>
                              </div>
                            </div>)
                          })
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card" >
                <div className="card-header text-white bg-primary">Awnsered Polls</div>
                <div className="card-body">

                  <div className="">
                    {answeredQuestions != null && answeredQuestions[0] != undefined &&
                            answeredQuestions.map((question, index) => {
                              return (<div className="row pb-3" key={index}>
                                <div className="col-2">
                                  <span className="text-dark">{(index+1).toString()}.</span>
                                </div>
                                <div className="col-5">
                                  <span className="text-dark">{question.id}</span>
                                </div>
                                <div className="col-5">
                                  <button className="btn btn-primary" onClick={() => { navigate('/answer-poll/'+question.id); }}> Show Poll</button>
                                </div>
                              </div>)
                            })
                    }
                  </div>

                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
      </div>
    );
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
  users: state.users.allUsers,
  currentUser: state.loginUser.currentUser,
  questions: state.questions.questions
}))(Home);