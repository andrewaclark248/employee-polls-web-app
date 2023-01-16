import { allUsers } from "../allUsers";
import { connect } from "react-redux";

function LeaderBoard(props) {
    let userStats = getUserStats(props.userPolls, props.originalPolls)
    var sortedStats = sortStats(userStats);
    return (
        <div>
            <div className="row">
                <center>
                    <h2>Leader Board</h2>
                </center>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">

                    <div className="card" >
                        <div className="card-header text-white bg-primary">Leader Board</div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th>UserName</th>
                                    <th>Avatar</th>
                                    <th># of Questions Asked</th>
                                    <th># of Questions Anwsered</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        sortedStats.map((stat, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{getUserNamePretty(stat.user)}</td>
                                                    <td>
                                                        <img src={getAvatar(stat.user)} height={20} width={20} />
                                                    </td>
                                                    <td>{stat.numberOfQuestionsAsked}</td>
                                                    <td>{stat.numberOfQuestionsAnswered}</td>
                                                </tr>
                                            );
                                        })

                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );

}

function sortStats(stats) {
    stats.sort(function(a, b) {
        var stat1 = a.numberOfQuestionsAsked + a.numberOfQuestionsAnswered;
        var stat2 = b.numberOfQuestionsAsked + b.numberOfQuestionsAnswered;
        return parseFloat(stat2) - parseFloat(stat1);
    });
    return stats;
}

function getUserStats(userPolls, originalPolls) {
    var stats = []

    allUsers.map((user) => {
        var currentUserStats = {
            user: user,
            numberOfQuestionsAsked: null,
            numberOfQuestionsAnswered: null 
        }
        var currentUserPolls = userPolls.filter((poll) => {
            return poll.user == user;
        })
        var unawnseredPollsList = awnseredPolls(currentUserPolls)
        currentUserStats.numberOfQuestionsAnswered = unawnseredPollsList.length;

        var numberOfQuestionsAskedResult = numberOfQuestionsAsked(originalPolls, user)
        currentUserStats.numberOfQuestionsAsked = numberOfQuestionsAskedResult;
        
        stats.push(currentUserStats)
    })
    return stats;
}



function numberOfQuestionsAsked(originalPolls, currentUser) {
    var pollsAsked = null;
    var polls = originalPolls.filter((poll) => {
        return poll.currentUser == currentUser
    })
    pollsAsked = polls.length
    return pollsAsked
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
        file = require("./../assets/avatar-3-female.jpg")
    } else if(currentUser == "john-doe") {
        file = require("./../assets/avatar-2-male.jpg")
    } else if (currentUser == "batman-robin") {
        file = require("./../assets/avatar-1-male.jpg")
    } else {
        file = require("./../assets/none.jpg")
    }
    return file;
  }
  


export default connect((state) => ({
    currentUser: state.loginUser.currentUser,
    userPolls: state.polls.userPolls,
    originalPolls: state.polls.originalPolls
  }))(LeaderBoard);