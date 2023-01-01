import Select from 'react-select'
import './App.css'
import { connect } from "react-redux";
import { LOGIN_TYPE } from "./redux/actions/loginUserAction.js"
import { LOGIN_PAGE, HOME_PAGE } from "./redux/actions/changePageAction.js"

const options = [
    { value: 'john-doe', label: 'John Doe' },
    { value: 'jane-doe', label: 'Jane Doe' },
    { value: 'batman', label: 'Batman' }
  ]

function Login(props) {
  console.log("Login page", props)
    return (
    <div >
        <h1 className="bottom-padding">Login Page</h1>
        <div className="pb-3">
            <span>Select User To Login As</span>
        </div>
        <div className="row pb-5">
            <div className="col-4"></div>
            <div className="col-4">
                <Select options={options} onChange={(e) => props.dispatch({type: LOGIN_TYPE, payload: e.value})} />
            </div>
            <div className="col-4"></div>
        </div>
        <button className="btn btn-primary" onClick={() => { props.dispatch({type: HOME_PAGE })}}>Login</button>
      </div>
    );
  }

const mapStateToProps = state => {
	return {
		currentPage: state.currentPage

  }
}

export default connect((state) => ({
	currentPage: state.changePage.currentPage
}))(Login);


  
  //props.dispatch({
  //  type: ADD_GOAL,
  //  goal
  //})

//(state) => ({
 //   goals: state.goals,
 // })