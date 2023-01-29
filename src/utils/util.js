
export function sortQuestions(questions) {
    questions.sort((a, b) => {
      return (b.timestamp - a.timestamp)
    })
    return questions;
  }
  
export function getUnansweredQuestions(questions, currentUser) {
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

export function getAnsweredQuestions(questions, currentUser) {
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

export function getUserStats(allUsers, questions, currentUser) {
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
        var questionAnswered = Object.keys(allUsers[user.id].answers).length
        var questionsAsked = numberOfQuestionsAsked(questions, user.id)
        tempUser.user = user.id;
        tempUser.numOfQuestionsAnswered = questionAnswered;
        tempUser.numOfQuestionsAsked = questionsAsked;
        tempUser.avatarUrl = user.avatarURL
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

export function sortUsers(users) {
    var result = users.sort(function(a, b) {
        var user1Total = a.numOfQuestionsAnswered + a.numOfQuestionsAsked;
        var user2Total = b.numOfQuestionsAnswered + b.numOfQuestionsAsked;
        return user2Total - user1Total;
    });
    return result;
} 

