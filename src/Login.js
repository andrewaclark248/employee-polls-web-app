import Select from 'react-select'
import './App.css'

const options = [
    { value: 'john-doe', label: 'John Doe' },
    { value: 'jane-doe', label: 'Jane Doe' },
    { value: 'batman', label: 'Batman' }
  ]

function changeUser(event) {
    console.log(event.value)
}

function Login() {
    return (
    <div >
        <h1 className="bottom-padding">Login Page</h1>
        <div className="pb-3">
            <span>Select User To Login As</span>
        </div>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <Select options={options} onChange={(e) => changeUser(e)}/>
            </div>
            <div className="col-4"></div>
        </div>

      </div>
    );
  }
  
  export default Login;
  