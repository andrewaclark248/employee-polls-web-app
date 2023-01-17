import Select from 'react-select'
import { useState } from 'react';
//import { UPDATE_POLL_TYPE } from "../redux/actions/pollActions.js"
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAvatar, getUserNamePretty } from "./../utils/util.js"


function ShowPoll(props) {
    const navigate = useNavigate();

    var [pollChoice, setPollChoice] = useState("");
    let getPoll = props.userPolls.filter((poll) => {
        return poll.id == props.currentPoll
    })[0]


    let options = [
        { value: getPoll.firstOption, label: getPoll.firstOption },
        { value: getPoll.secondOption, label: getPoll.secondOption }
      ]
    var picture = getAvatar(props.currentUser)

    return (
        <div>
            <h1 className="">New Poll</h1>
            <div className="row bottom-padding">
            <div className="col-4"></div>
            <div className="col-4">
                <span>Current User: <span className='fw-bold'>{getUserNamePretty(props.currentUser)}</span></span>
                <img src={picture} height={100} width={100} />
            </div>
            <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            Answer Poll
                        </div>
                        <div className="card-body">
                            <div className="pb-3">
                                <label className="">Poll ID</label>
                                <input className="form-control"  disabled={true} value={getPoll.id}/>
                            </div>
                            <div className="pb-3">
                                <label className="">Poll Name</label>
                                <input className="form-control"  disabled={true} value={getPoll.pollName}/>
                            </div>
                            <div className="pb-3">
                                <label className="">First Choice</label>
                                <input className="form-control"  disabled={true} value={getPoll.firstOption}/>
                            </div>
                            <div className="pb-3">
                                <label className="">Second Choice</label>
                                <input className="form-control"  disabled={true} value={getPoll.secondOption}/>
                            </div>
                            <div className="pb-3">
                                <Select options={options} onChange={(e) => setPollChoice(e.value)} />
                            </div>
                            <div className="pb-3">
                                <button className="btn btn-primary" onClick={() => { props.setAlertText("You updated your Poll!"); props.showNotificationBox(true); anwserPoll(pollChoice, props, getPoll.id);  navigate('/home');  }}>Update Poll</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

//validation
function anwserPoll(pollChoice, props, pollId) {
    if (pollChoice != "") {
        //props.dispatch({type: UPDATE_POLL_TYPE, payload: {pollId: pollId, pollChoice: pollChoice}})
    }
}  

export default connect((state) => ({
    currentUser: state.loginUser.currentUser,
    userPolls: state.polls.userPolls
}), null)(ShowPoll);


