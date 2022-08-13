import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/LoginPage.js";
import SignUp from "./pages/SignUpPage.js";
import userPage from "./pages/userPage.js";
import HomePage from './pages/HomePage';

function App() {
  return ( 
    <Router>
    <div className="App">
      <div >
        <div >
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/userPage" element={<userPage />} />
            <Route path="/HomePage" element ={<HomePage />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  )
}

export default App;
