import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {

  return (
      <div className="App">
        <Router>
          <br />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/homepage" element={<Home />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
