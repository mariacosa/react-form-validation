import { Routes, Route} from "react-router-dom";

import "./index.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";


function App() {
  return (
    <div >
      <Routes>
        <Route path="home" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
      </Routes>
    </div>
  )
}

export default App