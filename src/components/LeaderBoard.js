import { connect } from "react-redux";


function LeaderBoard(props) {
    var result = getUserStats(props.allUsers, props.questions, props.currentUser)
    sortUsers(result);
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

function getUserStats(allUsers, questions, currentUser) {
    var users = [];
    var userKeys = Object.keys(allUsers)
    userKeys.forEach((key) => {
        var user = allUsers[key]
        var tempUser = {
            user: null,
            numOfQuestionsAsked: null,
            numOfQuestionsAnswered: null,
            avatarUrl: null
        }
        var questionAnswered = user.questions.length;
        var questionsAsked = numberOfQuestionsAsked(questions, currentUser)
        tempUser.user = user.id;
        tempUser.numOfQuestionsAnswered = questionAnswered;
        tempUser.numOfQuestionsAsked = questionsAsked;
        users.push(tempUser);
    })
    return users;
}

function numberOfQuestionsAsked(questions, currentUser) {
    var questionKeys = Object.keys(questions);
    var totalQuestionsAsked = 0
    questionKeys.forEach((key) => {
        var question = questions[key]
        if (question.author == currentUser) {
            totalQuestionsAsked = totalQuestionsAsked + 1;
        }
    })
    return totalQuestionsAsked;
}

function sortUsers(users) {
    var result = users.sort(function(a, b) {
        var user1Total = a.numOfQuestionsAnswered + a.numOfQuestionsAsked;
        var user2Total = b.numOfQuestionsAnswered + b.numOfQuestionsAsked;
        return user2Total - user1Total;
    });
    console.log("result", result)
    console.log("users", users)

} 


export default connect((state) => ({
    currentUser: state.loginUser.currentUser,
    allUsers: state.users.allUsers,
    questions: state.questions.questions
  }))(LeaderBoard);