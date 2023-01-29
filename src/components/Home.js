import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { _getQuestions } from './../DATA.js'
import { useState } from "react";
import { sortQuestions, getUnansweredQuestions, getAnsweredQuestions } from './../utils/util.js'

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





  
export default connect((state) => ({
  allUsers: state.users.allUsers,
  currentUser: state.loginUser.currentUser,
  questions: state.questions.questions
}))(Home);