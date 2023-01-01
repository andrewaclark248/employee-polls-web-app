import { connect } from "react-redux";

function Home(props) {

    return (
      <div >
          <h1>Home Page</h1>
          <span>Current User: {props.currentUser}</span>
      </div>
    );
  }
  
  
  export default connect((state) => ({
    currentUser: state.loginUser.currentUser
  }))(Home);