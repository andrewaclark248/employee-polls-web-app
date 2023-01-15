import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './Home.js';
import Login from './Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { LOGIN_PAGE, HOME_PAGE, NEW_POLL_PAGE, SHOW_POLL_PAGE, ANWSERED_POLL_PAGE } from "./redux/actions/changePageAction.js"
import AppNavBar from './Navbar.js';
import NewPoll from './NewPoll.js';
import NotificationBox from './NotificationBox.js';
import React, { useState } from 'react';
import ShowPoll from './ShowPoll.js';
import AnwseredPoll from './AnwseredPoll.js';





function App2(props) {
    let [show, setShow] = useState(false);
    let [currentPoll, setCurrentPoll] = useState("");
    let [alertText, setAlertText] = useState("");

    console.log("set show = " + show);

    return (
        <div className="app">
          <BrowserRouter>
            <Routes>
              
              <Route path="/">

                <Route index element={
                  <React.Fragment>
                    <Login {...props}/>
                  </React.Fragment>
                  } />


                <Route path="home" element={
                  <React.Fragment>
                    <AppNavBar/>
                    {show &&
                      <NotificationBox showNotificationBox={setShow} alertText={alertText}/>
                    }
                    <Home {...props} setCurrentPoll={setCurrentPoll}/>
                  </React.Fragment>
                } />

                <Route path="new-poll" element={
                  <React.Fragment>
                    <AppNavBar />
                    <NewPoll {...props} showNotificationBox={setShow} setAlertText={setAlertText}/>
                  </React.Fragment>
                } />

              </Route>

            </Routes>
          </BrowserRouter>
        </div>
    )

}


export default connect((state) => ({
	currentPage: state.changePage.currentPage,
	currentUser: state.loginUser.currentUser,
	allPolls: state.polls.allPolls

}))(App2);



