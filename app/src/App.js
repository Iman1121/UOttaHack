import React from "react";
import "./App.css";
import Home from "./reactPages/Home"; // Adjust the path based on your project structure
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./reactPages/loginComponent/Login";
import Signup from "./reactPages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Pages">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
