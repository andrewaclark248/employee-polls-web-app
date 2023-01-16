import { allUsers } from "../allUsers";

export function unansweredPolls(allPolls, currentUser) {
    var userAnansweredPolls = allPolls.filter(function(poll) {
      if ((poll.user == currentUser) && (poll.answer == "none")){
        return poll;
      }
    });
    return userAnansweredPolls
} 

export function awnseredPolls(allPolls, currentUser) {
    var answeredPolls = allPolls.filter(function(poll) {
        if ((poll.answer != "none")){
        return poll;
        }
    });

    return answeredPolls;
}

export function getUserNamePretty(currentUser) {
    var firstName = currentUser.split("-")[0]
    var lastName = currentUser.split("-")[1]
    var name = firstName + " " + lastName
    return name;
}

export function getAvatar(currentUser) {
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

  

export function sortStats(stats) {
    stats.sort(function(a, b) {
        var stat1 = a.numberOfQuestionsAsked + a.numberOfQuestionsAnswered;
        var stat2 = b.numberOfQuestionsAsked + b.numberOfQuestionsAnswered;
        return parseFloat(stat2) - parseFloat(stat1);
    });
    return stats;
}

export function getUserStats(userPolls, originalPolls) {
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
        var awnseredPollsList = awnseredPolls(currentUserPolls)
        currentUserStats.numberOfQuestionsAnswered = awnseredPollsList.length;

        var numberOfQuestionsAskedResult = numberOfQuestionsAsked(originalPolls, user)
        currentUserStats.numberOfQuestionsAsked = numberOfQuestionsAskedResult;
        
        stats.push(currentUserStats)
    })
    return stats;
}



export function numberOfQuestionsAsked(originalPolls, currentUser) {
    var pollsAsked = null;
    var polls = originalPolls.filter((poll) => {
        return poll.currentUser == currentUser
    })
    pollsAsked = polls.length
    return pollsAsked
} 


export function numberOfPeopleWhoVotedForPoll(userPolls, currentPoll) {
    var polls = userPolls.filter((poll) => {
        return poll.originalPollId == currentPoll.originalPollId;
    })

    var pollWithSameAnswer = polls.filter((poll) => {
        return poll.answer == currentPoll.answer;
    })
    var result = (pollWithSameAnswer.length - 1)
    if (result < 0) {
        result = 0;
    }
    return result
} 

export function percentageOfPeopleWhoVotedForPoll(totalVote) {
    var result = (Math.floor((totalVote/3)*100))
    return result;
}

