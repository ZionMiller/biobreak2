import "../App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import { useEffect, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

const App = () => {
  const navigate = useNavigate();

  type userData = {
    id: number;
    username: string;
    password: string;
    email: string;
    first: string;
    last: string;
  };

  const [user, setUser] = useState<userData | null>(null);

  const updateUser = (user: userData) => {
    setUser(user);
  };

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((person) => setUser(person));
  });

  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    // updateUser("");
    navigate("/login");
  };

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login updateUser={updateUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
