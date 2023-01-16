import { connect } from "react-redux";
import Container from 'react-bootstrap';
//import Nav from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
//import NavDropdown from 'react-bootstrap';
import { Link } from "react-router-dom";
import { LOGIN_TYPE } from "../redux/actions/loginUserAction.js"


function AppNavBar(props) {

    return (
      <div style={{paddingBottom: 30}}>
        <Navbar bg="light" expand="lg" >
          <Navbar.Brand className="text-primary fw-bold " style={{paddingLeft: "20px", paddingRight: "20px"}} disabled={true}>
            Employee Poll App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="active fw-bold" to="/home" style={{textDecoration: "none", color: "black", paddingRight: 10 }}>Home</Link>
              <Link className="active fw-bold" to="/add" style={{textDecoration: "none", color: "black", paddingRight: 10 }}>New Poll</Link>
              <Link className="active fw-bold" to="/leaderboard" style={{textDecoration: "none", color: "black", paddingRight: 10 }}>LeaderBoard</Link>
            </Nav>
          </Navbar.Collapse>
          <Link className="active fw-bold " to="/" style={{textDecoration: "none", color: "black", paddingRight: 10 }} onClick={() => { props.dispatch({type: LOGIN_TYPE, payload: 'none'}) }}>Log Out</Link>

        </Navbar>
      </div>
    );
  }
  
  
  export default connect((state) => ({
    currentUser: state.loginUser.currentUser
  }))(AppNavBar);


  //props.dispatch({type: HOME_PAGE })

  //export default connect((state) => ({
	//currentPage: state.changePage.currentPage
//}))(Login);
