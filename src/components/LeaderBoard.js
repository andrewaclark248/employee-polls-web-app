import { connect } from "react-redux";
import { getUserNamePretty, getAvatar, getUserStats, sortStats } from "./../utils/util.js"


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



export default connect((state) => ({
    currentUser: state.loginUser.currentUser,
    userPolls: state.polls.userPolls,
    originalPolls: state.polls.originalPolls
  }))(LeaderBoard);