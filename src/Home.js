import { connect } from "react-redux";

function Home(props) {
  var userUnansweredPolls = null;
    if (props.allPolls.length > 0) {
      userUnansweredPolls = unansweredPolls(props.allPolls, props.currentUser)
      console.log(userUnansweredPolls != null)
    }
    
    return (
      <div>
          <div className="bottom-padding">
            <h1>Home Page</h1>
            <span>Current User: {props.currentUser}</span>
          </div>

          <div className="row">
            <div className="col-2"></div>

            <div className="col-4">
              <div className="card" >
                <div className="card-header text-white bg-primary">Unawnsered Polls</div>
                <div className="card-body">

                  <div className="">
                    {userUnansweredPolls != null &&
                      userUnansweredPolls.map((poll, index) => {
                        return (<div className="row" key={index}>
                          <div className="col-3">
                            <span className="text-dark">somse data ahahahahha</span>
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
                  <h5 className="card-title">Card title</h5>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
      </div>
    );
  }


  function unansweredPolls(allPolls, currentUser) {
    var userAnansweredPolls = allPolls.map(function(poll) {
      if ((poll.currentUser == currentUser) && (poll.answer == "none")){
        return poll;
      }
    });
    return userAnansweredPolls
  } 
  
  
  export default connect((state) => ({
    currentUser: state.loginUser.currentUser,
    allPolls: state.polls.allPolls
  }))(Home);