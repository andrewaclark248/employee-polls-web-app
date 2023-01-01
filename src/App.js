import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Login from './Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { LOGIN_PAGE, HOME_PAGE, NEW_POLL_PAGE, SHOW_POLL_PAGE } from "./redux/actions/changePageAction.js"
import AppNavBar from './Navbar.js';
import NewPoll from './NewPoll.js';
import NotificationBox from './NotificationBox.js';
import React, { useState } from 'react';
import ShowPoll from './ShowPoll.js';




function App(props) {
  let [show, setShow] = useState(false);
  let [currentPoll, setCurrentPoll] = useState("");

  return (
    <div className="App">
        {props.currentPage != LOGIN_PAGE &&
          <div className="pb-4">
            <AppNavBar/>
          </div>
        }
        {show &&
          <NotificationBox showNotificationBox={setShow}/>
        }
        {props.currentPage == LOGIN_PAGE &&
          <Login {...props}/>
        }
        {props.currentPage == HOME_PAGE &&
          <Home {...props} setCurrentPoll={setCurrentPoll}/>
        }
        {props.currentPage == NEW_POLL_PAGE &&
          <NewPoll {...props} showNotificationBox={setShow}/>
        }  
        {props.currentPage == SHOW_POLL_PAGE &&
          <ShowPoll currentPoll={currentPoll}/>
        }        
    </div>
  );
}



export default connect((state) => ({
	currentPage: state.changePage.currentPage,
	currentUser: state.loginUser.currentUser,
	allPolls: state.polls.allPolls

}))(App);



