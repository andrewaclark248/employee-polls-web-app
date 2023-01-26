import Select from 'react-select'
import './../App.css'
import { connect } from "react-redux";
import { useState } from 'react';
import AppNavBar from './Navbar.js';
import { useNavigate } from 'react-router-dom';
import { _saveQuestion } from './../DATA.js'
import { CREATE_QUESTION } from './../redux/actions/questionAction.js'

function NewPoll(props) {
    var [firstOption, setFirstOption] = useState("");
    var [secondOption, setSecondOption] = useState("");
    const navigate = useNavigate();
    if (props.currentUser == "none" || props.currentUser == undefined) {
        setTimeout(()=>{
            navigate('/');
          }, 100)
        return;
    }

    return (
    <div >
        <center>
            <h1 className="bottom-padding">New Poll</h1>
        </center>

        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="card" >
                    <div className="card-header text-white bg-primary">New Poll</div>
                    <div className="card-body">
                        <h5 className="card-title pb-4">Would You Rather?</h5>
                        <div className="pb-3">
                            <label className="">First Option</label>
                            <input className="form-control" placeholder="First Option" onChange={(e) => { setFirstOption(e.target.value) }} />
                        </div>
                        <div className="pb-5">
                            <label className="">Second Option</label>
                            <input className="form-control" placeholder="Second Option" onChange={(e) => { setSecondOption(e.target.value) }} />
                        </div>
                        <div className="pb-2">
                            <button className="btn btn-primary" onClick={() => { onClickHandler(props, firstOption, secondOption); navigate('/home'); }}>Create Poll</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3"></div>

        </div>
      </div>
    );
  }


async function onClickHandler(props, firstOption, secondOption) {
    props.setAlertText("You created a New Poll!!!"); 
    
    props.showNotificationBox(true); 
    
    var question = {
        optionOneText: firstOption,
        optionTwoText: secondOption,
        author: props.currentUser
    }

    var result = await _saveQuestion(question)
    props.dispatch({type: CREATE_QUESTION, payload: {question: result} });
}


export default connect((state) => ({
	currentUser: state.loginUser.currentUser
	//allPolls: state.polls.allPolls
}))(NewPoll);


  
  //props.dispatch({
  //  type: ADD_GOAL,
  //  goal
  //})

//(state) => ({
 //   goals: state.goals,
 // })


 //props.dispatch({type: HOME_PAGE })