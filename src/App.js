import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Login from './Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(props) {
  console.log("App ====", props)
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Login />} />
              <Route path="home" element={<Home {...props}/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
