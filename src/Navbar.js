import { connect } from "react-redux";
import Container from 'react-bootstrap';
//import Nav from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
//import NavDropdown from 'react-bootstrap';
import { Link }  from "react-router-dom"
import { LOGIN_PAGE, HOME_PAGE, NEW_POLL_PAGE } from "./redux/actions/changePageAction.js"


function AppNavBar(props) {

    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" className="text-primary fw-bold " style={{paddingLeft: "20px", paddingRight: "20px"}} disabled={true}>
            Employee Poll App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="active fw-bold" onClick={() => { props.dispatch({type: HOME_PAGE })}}>Home</Nav.Link>
              <Nav.Link href="#link" className="active fw-bold" onClick={() => { props.dispatch({type: NEW_POLL_PAGE })}}>New Poll</Nav.Link>
              <Nav.Link href="#link" className="active fw-bold">Leader Board</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
  
  
  export default connect((state) => ({
    currentUser: state.loginUser.currentUser
  }))(AppNavBar);


  //props.dispatch({type: HOME_PAGE })

  //export default connect((state) => ({
	//currentPage: state.changePage.currentPage
//}))(Login);
