import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons from Font Awesome or another icon library
import { faBars, faHome, faUser, faEnvelope, faUserCircle, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const exportToCsv = async () => {
    try {
      const response = await fetch('http://localhost:8000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Specify content type as JSON
        },
        body: JSON.stringify({ // Convert object to JSON string
          username: 'Manasi',
          email: 'manasi@gmail.com'
        }),
      });

      if (response.ok) {
        const jobsData = await response.json();
        const csvRows = [];
        const headers = Object.keys(jobsData[0]);
        csvRows.push(headers.join(','));

        for (const row of jobsData) {
          const values = headers.map(header => {
            const escaped = ('' + row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
          });
          csvRows.push(values.join(','));
        }

        const csvData = csvRows.join('\n');
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'export_jobs.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error('Failed to fetch jobs');
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`} role="button">
      {/* This is the hamburger icon item that toggles the sidebar */}
      <div className="sidebar-item hamburger" onClick={toggleSidebar} onKeyDown={(e) => {
    // Trigger the click event handler when Enter or Space key is pressed
    if (e.key === 'Enter' || e.key === 'Space') {
      toggleSidebar();
    }
  }} role="button">
        <FontAwesomeIcon icon={faBars} className="sidebar-icon" />
      </div>
      {/* New profile item with specific styling */}
      <div className="sidebar-item profile" role="button">
        <FontAwesomeIcon icon={faUserCircle} className="sidebar-icon profile-icon" />
        <span className="sidebar-text profile-text">Edit Profile</span>
      </div>
      {/* Rest of sidebar items */}
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
        <span className="sidebar-text">Dashboard</span>
      </div>
      <div className="sidebar-item" onClick={exportToCsv}  onKeyDown={(e) => {
    // Trigger the click event handler when Enter or Space key is pressed
    if (e.key === 'Enter' || e.key === 'Space') {
      exportToCsv();
    }
  }} role="button">
        <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
        <span className="sidebar-text" >Export Job</span>
      </div>
      <div className="sidebar-item clickable" role="button">
        <FontAwesomeIcon icon={faEnvelope} className="sidebar-icon" />
        <span className="sidebar-text">
        <Link to="/view_calender">View Calendar</Link></span>
      </div>
      <div className="sidebar-item" role="button">
        <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
        <span className="sidebar-text">
          <Link to="/data_visualize">View Graph</Link>
        </span>
      </div>
      
      {/* ... other sidebar items ... */}
    </div>
  );
};

export default Sidebar;