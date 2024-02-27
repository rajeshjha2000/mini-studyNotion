import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home.jsx";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

        {/* Conditionally render PrivateRoute only if user is logged in */}
        {isLoggedIn && (
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        )}
      </Routes>
    </div>
  );
}

export default App;