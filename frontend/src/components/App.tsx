import "../App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </div>
  );
};

export default App;
