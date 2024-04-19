import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Visualize from './components/Visualize';
import CV from './components/CV';

function App() {
  //  App.js file added ok
  return (
      <div className="App">
        <Router>
          <br />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home_dashboard" element={<Home />} />
            <Route path="/data_visualize" element={<Visualize />} />
            <Route path="/view_calender" element={<CV />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;