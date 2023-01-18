import './../App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './Home.js';
import Login from './Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import AppNavBar from './Navbar.js';
import NewPoll from './NewPoll.js';
import NotificationBox from './NotificationBox.js';
import React, { useState } from 'react';
import ShowPoll from './ShowPoll.js';
import AnwseredPoll from './AnwseredPoll.js';
import LeaderBoard from './LeaderBoard';





function App2(props) {
    let [show, setShow] = useState(false);
    let [currentPoll, setCurrentPoll] = useState("");
    let [alertText, setAlertText] = useState("");

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

                <Route path="add" element={
                  <React.Fragment>
                    <AppNavBar />
                    <NewPoll {...props} showNotificationBox={setShow} setAlertText={setAlertText}/>
                  </React.Fragment>
                } />

                <Route path="questions/:question_id" element={
                  <React.Fragment>
                    <AppNavBar />
                    <AnwseredPoll currentPoll={currentPoll} {...props} />
                  </React.Fragment>
                } />


                <Route path="answer-poll/:question_id" element={
                  <React.Fragment>
                    <AppNavBar />
                    <ShowPoll showNotificationBox={setShow} setAlertText={setAlertText}/>
                  </React.Fragment>
                } />

                <Route path="leaderboard" element={
                  <React.Fragment>
                    <AppNavBar />
                    <LeaderBoard {...props} />
                  </React.Fragment>
                } />

              </Route>

            </Routes>
          </BrowserRouter>
        </div>
    )

}
//

export default connect((state) => ({
	currentUser: state.loginUser.currentUser,

}))(App2);



