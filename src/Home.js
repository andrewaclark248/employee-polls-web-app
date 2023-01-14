import { connect } from "react-redux";
import { SHOW_POLL_PAGE, ANWSERED_POLL_PAGE} from "./redux/actions/changePageAction.js"

function Home(props) {
  var userUnansweredPolls = null;
  var userAnwseredPolls = null;
    if (props.allPolls.length > 0) {
      userUnansweredPolls = unansweredPolls(props.allPolls, props.currentUser)
      userAnwseredPolls = awnseredPolls(props.allPolls, props.currentUser)
    }
    //console.log(userAnwseredPolls)
    var userName = getUserNamePretty(props.currentUser)

    return (
      <div>
          <div className="bottom-padding">
            <h1>Home Page</h1>
            <span>Current User: {userName}</span>
          </div>

          <div className="row">
            <div className="col-2"></div>

            <div className="col-4">
              <div className="card" >
                <div className="card-header text-white bg-primary">Unawnsered Polls</div>
                <div className="card-body">

                  <div className="">
                    {userUnansweredPolls != null && userUnansweredPolls[0] != undefined &&
                      userUnansweredPolls.map((poll, index) => {
                        return (<div className="row pb-3" key={index}>
                          <div className="col-2">
                            <span className="text-dark">{(index+1).toString()}.</span>
                          </div>
                          <div className="col-5">
                            <span className="text-dark">{poll?.pollName}</span>
                          </div>
                          <div className="col-5">
                            <button className="btn btn-primary" onClick={() => { props.setCurrentPoll(poll.pollName); props.dispatch({type: SHOW_POLL_PAGE}) }}> Show Poll</button>
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
                    {userAnwseredPolls != null && userAnwseredPolls[0] != undefined &&
                      userAnwseredPolls.map((poll, index) => {
                        return (<div className="row pb-3" key={index}>
                          <div className="col-2">
                            <span className="text-dark">{(index+1).toString()}.</span>
                          </div>
                          <div className="col-5">
                            <span className="text-dark">{poll?.pollName}</span>
                          </div>
                          <div className="col-5">
                            <button className="btn btn-primary" onClick={() => { props.setCurrentPoll(poll.pollName); props.dispatch({type: ANWSERED_POLL_PAGE}) }}> Show Poll</button>
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


  function unansweredPolls(allPolls, currentUser) {
    var userAnansweredPolls = allPolls.filter(function(poll) {
      if ((poll.currentUser == currentUser) && (poll.answer == "none")){
        return poll;
      }
    });
    return userAnansweredPolls
  } 

  function awnseredPolls (allPolls, currentUser) {
    var userAnsweredPolls = allPolls.filter(function(poll) {
      if ((poll.currentUser == currentUser) && (poll.answer != "none")){
        return poll;
      }
    });
    return userAnsweredPolls;
  }

  function getUserNamePretty(currentUser) {
    var firstName = currentUser.split("-")[0]
    var lastName = currentUser.split("-")[1]
    var name = firstName + " " + lastName
    return name;
  }
  
  
  export default connect((state) => ({
    currentUser: state.loginUser.currentUser,
    allPolls: state.polls.allPolls
  }))(Home);