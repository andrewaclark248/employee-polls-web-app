import { connect } from "react-redux";
import { SHOW_POLL_PAGE, ANWSERED_POLL_PAGE} from "./redux/actions/changePageAction.js"
import AppNavBar from './Navbar.js';
import { useNavigate } from 'react-router-dom';

function Home(props) { 
  
    var userUnansweredPolls = null;
    var userAnwseredPolls = null;
    if (props.userPolls?.length > 0) {
      userUnansweredPolls = unansweredPolls(props.userPolls, props.currentUser)
      //userAnwseredPolls = awnseredPolls(props.allPolls, props.currentUser)
    }
    let sortedUserUnansweredPolls = userUnansweredPolls?.sort((a, b) =>  {return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()})

    /** 
    //sort unawnsered polls
    
    //sort awnsered polls
    let sortedUserAnwseredPolls = userAnwseredPolls?.sort((a, b) =>  {return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()})
    


    */

    //pretty user name
    var userName = getUserNamePretty(props.currentUser)

    //get avatar
    var picture = getAvatar(props.currentUser)

    return (
      <div>
          <center>
            <div className="bottom-padding">
              <h1>Home Page</h1>
              <span>Current User: {userName}</span>
              <img src={picture} height={100} width={100} />

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


function getAvatar(currentUser) {
  var file = null
  if (currentUser == "jane-doe") {
      file = require("./assets/avatar-3-female.jpg")
  } else if(currentUser == "john-doe") {
      file = require("./assets/avatar-2-male.jpg")
  } else if (currentUser == "batman") {
      file = require("./assets/avatar-1-male.jpg")
  } else {
      file = require("./assets/none.jpg")
  }
  return file;
}

  
  
  export default connect((state) => ({
    currentUser: state.loginUser.currentUser,
    originalPolls: state.polls.originalPolls,
    userPolls: state.polls.userPolls
  }))(Home);