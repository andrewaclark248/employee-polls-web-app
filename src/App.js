import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Login from './Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { LOGIN_PAGE, HOME_PAGE } from "./redux/actions/changePageAction.js"




function App(props) {
  console.log("App page", props)

  return (
    <div className="App">
        {props.currentPage == LOGIN_PAGE &&
          <Login {...props}/>
        }
        {props.currentPage == HOME_PAGE &&
          <Home {...props}/>
        }
        
    </div>
  );
}



export default connect((state) => ({
	currentPage: state.changePage.currentPage
}))(App);



