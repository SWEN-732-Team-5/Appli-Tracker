import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import DataPlot from './DataPlot2';
import JobRolePieChart from './JobRolePieChart';
import LocationBarChart from './LocationBarChart';
import './Dashboard.css';

function Visualize() {
    // Initialize states with default values
    const [x1, setPlot1X] = useState([]);
    const [y1, setPlot1Y] = useState([]);

    // Fetch data for the first plot when component mounts
    useEffect(() => {
        const fetchPlot1Data = async () => {
            try {
                const response = await fetch('http://localhost:8000/applied_date_count', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: 'Manasi',
                        email: 'manasi@gmail.com'
                    }),
                });

                if (response.ok) {
                    const jsonOutput = await response.json();
                    console.log("Success: ", jsonOutput);
                    setPlot1X(jsonOutput.x);
                    setPlot1Y(jsonOutput.y);
                } else {
                    console.error(`HTTP error: ${response.status}: ${response.statusText}`);
                }
            } catch (error) {
                console.error("Network error:", error);
            }
        };

        fetchPlot1Data();
    }, []);

    const sampleData = {
        x: x1,
        y: y1
    };

    const [jobRoleData, plot2value] = useState([]);

    // Fetch data for the first plot when component mounts
    useEffect(() => {
        const fetchPlot2Data = async () => {
            try {
                const response = await fetch('http://localhost:8000/role_count', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: 'Manasi',
                        email: 'manasi@gmail.com'
                    }),
                });

                if (response.ok) {
                    const jsonOutput = await response.json();
                    console.log("Success: ", jsonOutput);
                    plot2value(jsonOutput);
                } else {
                    console.error(`HTTP error: ${response.status}: ${response.statusText}`);
                }
            } catch (error) {
                console.error("Network error:", error);
            }
        };

        fetchPlot2Data();
    }, []);

    const [locationData, plot3value] = useState([]);

    // Fetch data for the first plot when component mounts
    useEffect(() => {
        const fetchPlot3Data = async () => {
            try {
                const response = await fetch('http://localhost:8000/location_count', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: 'Manasi',
                        email: 'manasi@gmail.com'
                    }),
                });

                if (response.ok) {
                    const jsonOutput = await response.json();
                    console.log("Success: ", jsonOutput);
                    plot3value(jsonOutput);
                } else {
                    console.error(`HTTP error: ${response.status}: ${response.statusText}`);
                }
            } catch (error) {
                console.error("Network error:", error);
            }
        };

        fetchPlot3Data();
    }, []);

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-main">
                <center>
                    <h1>AppliTracker Visualization</h1>
                    <div style={{ marginLeft: '200px', marginRight: '200px', marginTop: '20px', padding: '10px', borderRadius: '10px' }}>
                        <DataPlot data={sampleData} />
                    </div>
                    <div>
                        <div style={{ padding: '10px' }}>
                            <JobRolePieChart data={jobRoleData} />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <LocationBarChart data={locationData} />
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );
}

export default Visualize;
