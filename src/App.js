import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Login from './Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { LOGIN_PAGE, HOME_PAGE, NEW_POLL_PAGE } from "./redux/actions/changePageAction.js"
import AppNavBar from './Navbar.js';
import NewPoll from './NewPoll.js';




function App(props) {
  return (
    <div className="App">
        {props.currentPage != LOGIN_PAGE &&
          <AppNavBar/>
        }
        {props.currentPage == LOGIN_PAGE &&
          <Login {...props}/>
        }
        {props.currentPage == HOME_PAGE &&
          <Home {...props}/>
        }  
        {props.currentPage == NEW_POLL_PAGE &&
          <NewPoll {...props}/>
        }        
    </div>
  );
}



export default connect((state) => ({
	currentPage: state.changePage.currentPage,
	currentUser: state.loginUser.currentUser,
	allPolls: state.polls.allPolls

}))(App);



