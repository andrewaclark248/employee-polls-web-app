import Select from 'react-select'
import './../App.css'
import { connect } from "react-redux";
import { LOGIN_TYPE } from "../redux/actions/loginUserAction.js"
import { Link } from "react-router-dom";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const options = [
    { value: 'sarahedo', label: 'Sarah Edo' },
    { value: 'tylermcginnis', label: 'Tyler McGinnis' },
    { value: 'mtsamis', label: 'Mike Tsamis', },
    { value: 'zoshikanlu', label: 'Zenobia Oshikanlu', }
  ]



function Login(props) {
  let [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  let newUrl = window.location.href.replace("http://localhost:3000","")
  let path = "/home"
  if (newUrl != "/") {
    path = newUrl;
  }


    return (
    <div>
        <center>
          <h1 className="bottom-padding">Login Page</h1>
          <div className="pb-3">
              <span>Select User To Login As</span>
          </div>
        </center>
        <div className="row pb-5">
            <div className="col-4"></div>
            <div className="col-4">
                <Select options={options} onChange={(e) => { setCurrentUser(e.value); }}/>
            </div>
            <div className="col-4"></div>
        </div>
        <center>
          <Link className="btn btn-primary" to="home" onClick={() => {  handleClick(props, currentUser, navigate, path)  }}>Login Now</Link>
        </center>
      </div>
    );
  }

  function handleClick(props, currentUser, navigate, path) {
    props.dispatch({type: LOGIN_TYPE, payload: currentUser});


    setTimeout(() => {
      navigate(path)
    })
  }

  //props.dispatch({type: LOGIN_TYPE, payload: currentUser});
export default connect((state) => ({
}))(Login);

