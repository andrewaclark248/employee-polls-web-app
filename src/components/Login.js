import Select from 'react-select'
import './../App.css'
import { connect } from "react-redux";
import { LOGIN_TYPE } from "../redux/actions/loginUserAction.js"
import { Link } from "react-router-dom";


const options = [
    { value: 'sarahedo', label: 'Sarah Edo' },
    { value: 'tylermcginnis', label: 'Tyler McGinnis' },
    { value: 'mtsamis', label: 'Mike Tsamis', },
    { value: 'zoshikanlu', label: 'Zenobia Oshikanlu', }
  ]

function Login(props) {
    console.log("went to login page")
    return (
    <div>
        <center>
          <h1 className="bottom-padding">Login Page</h1>
          <div className="pb-3">
              <span>Select User To Login As</span>
          </div>
        </center>
        <div className="row pb-5">
            <div className="col-4"></div>
            <div className="col-4">
                <Select options={options} onChange={(e) => props.dispatch({type: LOGIN_TYPE, payload: e.value})} />
            </div>
            <div className="col-4"></div>
        </div>
        <center>
          <Link className="btn btn-primary" to="home">Login</Link>
        </center>
      </div>
    );
  }

export default connect((state) => ({
}))(Login);



  
  //props.dispatch({
  //  type: ADD_GOAL,
  //  goal
  //})

//(state) => ({
 //   goals: state.goals,
 // })