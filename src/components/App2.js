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
import Poll from './Poll.js'
import ErrorPage from './ErrorPage';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';



function App2(props) {
    let [show, setShow] = useState(false);
    let [currentPoll, setCurrentPoll] = useState("");
    let [alertText, setAlertText] = useState("");
    let [pollPage, setPollPage] = useState("")


    return (
        <div className="app">
          <BrowserRouter>
            <Routes>
              
                {props.currentUser != "none" ?
                    (<React.Fragment>
                      <Route path="home" element={
                        <React.Fragment>
                          <AppNavBar/>
                          {show &&
                            <NotificationBox showNotificationBox={setShow} alertText={alertText}/>
                          }
                          <Home setCurrentPoll={setCurrentPoll} setPollPage={setPollPage}/>
                        </React.Fragment>
                      } />

                      <Route path="add" element={
                        <React.Fragment>
                          <AppNavBar />
                          <NewPoll howNotificationBox={setShow} setAlertText={setAlertText}/>
                        </React.Fragment>
                      } />


                      <Route path="leaderboard" element={
                        <React.Fragment>
                          <AppNavBar />
                          <LeaderBoard {...props} />
                        </React.Fragment>
                      } />

                      <Route path="questions/:question_id" element={
                        <React.Fragment>
                          <AppNavBar />
                          <Poll />
                        </React.Fragment>
                      } />
                      <Route path="error" element={<ErrorPage />} />
                    </React.Fragment>) : 
                    (
                      <Route index path="*" element={
                        <React.Fragment>
                          <AppNavBar/>
                          <Login {...props}/>
                        </React.Fragment>
                        } />
                    )
                }




            </Routes>
          </BrowserRouter>
        </div>
    )

}
//

export default connect((state) => ({
	currentUser: state.loginUser.currentUser,

}))(App2);



