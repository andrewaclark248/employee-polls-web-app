import { connect } from "react-redux";
import { getUserStats, sortUsers } from './../utils/util.js'



function LeaderBoard(props) {
    var result = getUserStats(props.allUsers, props.questions, props.currentUser)
    var users = sortUsers(result);

    console.log(users)
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
                                            users?.map((stat, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{stat.user}</td>
                                                        <td>
                                                            <img src={stat.avatarUrl} height={50} width={50} />
                                                        </td>
                                                        <td>{stat.numOfQuestionsAsked}</td>
                                                        <td>{stat.numOfQuestionsAnswered}</td>
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
    allUsers: state.users.allUsers,
    questions: state.questions.questions
  }))(LeaderBoard);