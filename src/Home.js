import { connect } from "react-redux";

function Home(props) {

    return (
      <div >
          <div className="bottom-padding">
            <h1>Home Page</h1>
            <span>Current User: {props.currentUser}</span>
          </div>

          <div className="row">
            <div className="col-2"></div>

            <div className="col-4">
              <div className="card" >
                <div className="card-header text-white bg-primary">Unawnsered Polls</div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card" >
                <div className="card-header text-white bg-primary">Awnsered Polls</div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                </div>
              </div>
            </div>

            <div className="col-2"></div>
          </div>
      </div>
    );
  }
  
  
  export default connect((state) => ({
    currentUser: state.loginUser.currentUser
  }))(Home);