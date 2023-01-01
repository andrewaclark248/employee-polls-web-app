
function ShowPoll(props) {
    let getPoll = props.allPolls.filter((poll) => {
        return poll.pollName == props.currentPoll
    })[0]
    console.log(getPoll)
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
                        </div>
                    </div>


                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default ShowPoll;
