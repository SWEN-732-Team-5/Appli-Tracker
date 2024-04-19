import React , { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Adjust the path if necessary
import DataPlot2 from './DataPlot2'; 
import './Dashboard.css';  // Ensure you have the required CSS
function Visualize() {
    //  App.js file added ok

    // Sample data for plotting
    const sampleData = {
        x: ['2024-01-01', '2024-02-01', '2024-03-01'],
        y: [10, 15, 8]
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-main">
                <h1>Dashboard</h1>
                <DataPlot2 data={sampleData} />
            </div>
        </div>
    );
}
    // return (

    //     <div className="dashboard">
    //         <Sidebar />
    //         <div className="dashboard-main">hii</div>
    //     </div>
    // );
// }
export default Visualize;
