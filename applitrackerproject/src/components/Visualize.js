import React , { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Adjust the path if necessary
import DataPlot from './DataPlot2'; 
import JobRolePieChart from './JobRolePieChart';
import LocationBarChart from './LocationBarChart'; 
import './Dashboard.css';  // Ensure you have the required CSS
function Visualize() {
    //  App.js file added ok

    // Sample data for plotting
    const sampleData = {
        x: ['2024-01-01', '2024-02-01', '2024-03-01'],
        y: [10, 15, 8]
    };
    const jobRoleData = [
        { role: 'Software Developer', count: 150 },
        { role: 'Data Scientist', count: 100 },
        { role: 'Product Manager', count: 70 }
    ];

    const locationData = [
        { location: 'New York', count: 200 },
        { location: 'San Francisco', count: 150 },
        { location: 'Seattle', count: 90 }
    ];

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-main">
                <h1>Dashboard</h1>
                <DataPlot data={sampleData} />
                <JobRolePieChart data={jobRoleData} />
                <LocationBarChart data={locationData} />
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
