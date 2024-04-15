import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const jobs = [
    // This is placeholder data; you would replace this with actual data fetched from an API.
    { id: 1, title: 'UI/UX Designer', company: 'Netflix', salary: '$12K-$14K / Month', type: 'Fulltime' },
    { id: 2, title: 'UX Designer', company: 'Triple Whale', salary: '$8K-$11K / Month', type: 'Fulltime' },
    { id: 3, title: 'Product Designer', company: 'Motto', salary: '$12K-$14K / Month', type: 'Part-time' },
    { id: 4, title: 'UI/UX Designer', company: 'Brooksource', salary: '$12K-$14K / Month', type: 'Fulltime' },
    { id: 5, title: 'UI Designer', company: 'SideQuestVR', salary: '$12K-$14K / Month', type: 'Fulltime' },
    // ... more job listings
  ];

  return <Dashboard jobs={jobs} />;
}

export default App;















//Sakshi code
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
// import Home from './Home';
// import Login from './Login';
// import SignUp from './SignUp';
// import Dashboards from './Dashboards';

// function App() {
//   //  App.js file added ok
//   return (
//       <div className="App">
//         <Router>
//           <br />
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/homepage" element={<Home />} />
//             <Route path="/dashboard" element={<Dashboards />} />
//           </Routes>
//         </Router>
//       </div>
//   );
// }

// export default App;


// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;