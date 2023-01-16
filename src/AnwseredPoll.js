import { connect } from "react-redux";


function AnwseredPoll(props) {

    let getPoll = props.userPolls.filter((poll) => {
        return poll.id == props.currentPoll
    })[0]

    return(
    <div>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            Answer Poll
                        </div>
                        <div className="card-body">
                            <div className="pb-5">
                                <label className="">Poll ID</label>
                                <input className="form-control"  disabled={true} value={getPoll.id}/>
                            </div>
                            <div className="pb-5">
                                <label className="">Poll Name</label>
                                <input className="form-control"  disabled={true} value={getPoll.pollName}/>
                            </div>
                            <div className="pb-3">
                                <label className="">First Choice</label>
                                <input className="form-control"  disabled={true} value={getPoll.firstOption}/>
                            </div>
                            <div className="pb-5">
                                <label className="">Second Choice</label>
                                <input className="form-control"  disabled={true} value={getPoll.secondOption}/>
                            </div>
                            <div className="pb-3">
                                <label className="">Awnser</label>
                                <input className="form-control"  disabled={true} value={getPoll.answer}/>
                            </div>
                            
 

                        </div>
                    </div>


                </div>
                <div className="col-3"></div>
            </div>


    </div>)
}


  
export default connect((state) => ({
    currentUser: state.loginUser.currentUser,
    originalPolls: state.polls.originalPolls,
    userPolls: state.polls.userPolls
  }))(AnwseredPoll);

//export default AnwseredPoll;