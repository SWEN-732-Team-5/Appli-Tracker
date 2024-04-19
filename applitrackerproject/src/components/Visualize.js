import React , { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Adjust the path if necessary
import './Dashboard.css';  // Ensure you have the required CSS


function Visualize() {
    //  App.js file added ok
    return (

        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-main">hii</div>
        </div>
    );
}
export default Visualize;
