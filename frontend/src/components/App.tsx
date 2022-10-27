import "../App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About"
import { SetStateAction, useEffect, useState } from "react";

const App = () => {

  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState(null)
  const updateUser = ((user: any) => setCurrentUser(user))

  useEffect(() => {
    fetch("/me")
    .then((r) => r.json())
    .then((person) => setCurrentUser(person))
  })

  const handleLogOut = () => {
    fetch('/logout', {
        method: "DELETE"
    })
    updateUser("");
    navigate('/login')
}
  
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/login' element={<Login /*updateUser={updateUser}*//>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
};

export default App;
