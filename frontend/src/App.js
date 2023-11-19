import React, { useState } from "react";
import { Routes, Route } from "react-router-dom/dist";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home loggedIn={loggedIn} />} />
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
    </Routes>
  );
};

export default App;
