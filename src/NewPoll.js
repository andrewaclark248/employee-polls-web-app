import Select from 'react-select'
import './App.css'
import { connect } from "react-redux";


function NewPoll(props) {
  console.log("Login page", props)
    return (
    <div >
        <h1 className="bottom-padding">New Poll</h1>
        <div className="pb-3">
            <span>This is a new Poll</span>
            <span>This is a new Poll</span>
            <span>This is a new Poll</span>
            <span>This is a new Poll</span>
            <span>This is a new Poll</span>
            <span>This is a new Poll</span>
            <span>This is a new Poll</span>
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