import "../App.css";
import { Routes, Route, redirect } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import { useState } from "react";

const App = () => {
  type userData = {
    id: number;
    username: string;
    password: string;
    email: string;
    first: string;
    last: string;
  };

  const loader = async () => {
    const user = await fetch("/me").then((res) => res.json());
    if (!user) {
      return redirect("/login");
    }
  }; //end of loader

  const [user, setUser] = useState<userData | null>(null);

  const getCurrentUser = () => {
    fetch("/me")
      .then((r) => r.json())
      .then((person) => setUser(person));
  };

  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    });

    setUser(null);

    return redirect("/login");
  };

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login updateUser={setUser} />} />
        <Route path="/signup" element={<Signup updateUser={setUser} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
