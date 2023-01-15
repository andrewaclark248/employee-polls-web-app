import { connect } from "react-redux";
import { SHOW_POLL_PAGE, ANWSERED_POLL_PAGE} from "./redux/actions/changePageAction.js"
import AppNavBar from './Navbar.js';
import { useNavigate } from 'react-router-dom';

function Home(props) {
  var userUnansweredPolls = null;
  var userAnwseredPolls = null;
    if (props.allPolls.length > 0) {
      userUnansweredPolls = unansweredPolls(props.allPolls, props.currentUser)
      userAnwseredPolls = awnseredPolls(props.allPolls, props.currentUser)
    }
    //pretty user name
    var userName = getUserNamePretty(props.currentUser)

    //sort unawnsered polls
    let sortedUserUnansweredPolls = userUnansweredPolls?.sort((a, b) =>  {return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()})
    
    //sort awnsered polls
    let sortedUserAnwseredPolls = userAnwseredPolls?.sort((a, b) =>  {return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()})
    
    const navigate = useNavigate();

    return (
      <div>
          <center>
            <div className="bottom-padding">
              <h1>Home Page</h1>
              <span>Current User: {userName}</span>
            </div>
          </center>

          <div className="row">
            <div className="col-2"></div>

            <div className="col-4">
              <div className="card" >
                <div className="card-header text-white bg-primary">Unawnsered Polls</div>
                <div className="card-body">

                  <div className="">
                    {sortedUserUnansweredPolls != null && sortedUserUnansweredPolls[0] != undefined &&
                      sortedUserUnansweredPolls.map((poll, index) => {
                        return (<div className="row pb-3" key={index}>
                          <div className="col-2">
                            <span className="text-dark">{(index+1).toString()}.</span>
                          </div>
                          <div className="col-5">
                            <span className="text-dark">{poll?.pollName}</span>
                          </div>
                          <div className="col-5">
                            <button className="btn btn-primary" onClick={() => { props.setCurrentPoll(poll.pollName); navigate('/show-poll'); }}> Show Poll</button>
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
                    {sortedUserAnwseredPolls != null && sortedUserAnwseredPolls[0] != undefined &&
                      sortedUserAnwseredPolls.map((poll, index) => {
                        return (<div className="row pb-3" key={index}>
                          <div className="col-2">
                            <span className="text-dark">{(index+1).toString()}.</span>
                          </div>
                          <div className="col-5">
                            <span className="text-dark">{poll?.pollName}</span>
                          </div>
                          <div className="col-5">
                            <button className="btn btn-primary" onClick={() => { props.setCurrentPoll(poll.pollName); navigate('/awnsered-poll'); }}> Show Poll</button>
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