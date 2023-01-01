import Select from 'react-select'
import { useState } from 'react';
import { UPDATE_POLL_TYPE } from "./redux/actions/pollActions.js"
import { connect } from "react-redux";


function ShowPoll(props) {
    var [pollChoice, setPollChoice] = useState("");
    let getPoll = props.allPolls.filter((poll) => {
        return poll.pollName == props.currentPoll
    })[0]

    let options = [
        { value: getPoll.firstOption, label: getPoll.firstOption },
        { value: getPoll.secondOption, label: getPoll.secondOption }
      ]

    return (
        <div>
            <h1 className="bottom-padding">New Poll</h1>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            Answer Poll
                        </div>
                        <div className="card-body">
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
                                <button className="btn btn-primary" onClick={() => { props.setAlertText("You updated your Poll!"); props.showNotificationBox(true); anwserPoll(pollChoice, props, getPoll.pollName) }}>Update Poll</button>
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
function anwserPoll(pollChoice, props, pollName) {
    if (pollChoice != "") {
        props.dispatch({type: UPDATE_POLL_TYPE, payload: {pollName: pollName, pollChoice: pollChoice}})
    }
}

export default connect(null, null)(ShowPoll);
