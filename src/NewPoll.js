import Select from 'react-select'
import './App.css'
import { connect } from "react-redux";


function NewPoll(props) {
  console.log("Login page", props)
    return (
    <div >
        <h1 className="bottom-padding">New Poll</h1>

        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="card" >
                    <div className="card-header text-white bg-primary">New Poll</div>
                    <div className="card-body">
                        <h5 className="card-title pb-4">Would You Rather?</h5>
                        <div className="pb-3">
                            <label className="">First Option</label>
                            <input className="form-control" placeholder="First Option"/>
                        </div>
                        <div className="pb-5">
                            <label className="">Second Option</label>
                            <input className="form-control" placeholder="Second Option"/>
                        </div>
                        <div className="pb-2">
                            <button className="btn btn-primary" onClick={() => { props.dispatch({type: "sdfd" })}}>Create Poll</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3"></div>

        </div>
      </div>
    );
  }


export default (NewPoll);


  
  //props.dispatch({
  //  type: ADD_GOAL,
  //  goal
  //})

//(state) => ({
 //   goals: state.goals,
 // })