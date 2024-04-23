import React, { useState } from 'react';
import Modal from './Modal'; // Make sure to create this component or import from a library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt, faBars, faHome, faChartBar, faFileExport , faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { Link } from "react-router-dom";
import profileImage from './img/profile.png'; // Adjust the path to where your image is stored

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false); // Make sure this line is correctly added
  const [userProfile, setUserProfile] = useState({
    username: 'Shardul',
    email: 'shardul@gmail.com',
    location: 'Rochester',
    profileImage: profileImage,
  });

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const closeEditProfileModal = () => {
    setIsEditProfileOpen(false); // Close the modal
  };
  
  const handleUserProfileUpdate = (updatedProfile) => {
    setUserProfile(updatedProfile);
  };

  // Placeholder function for Logout click action
  const handleLogoutClick = () => {
    // Placeholder for your logout functionality
    console.log("Logout Clicked");
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

  const handleEditProfileClick = () => {
    // Opens a new pop-up window. Adjust the URL and window options as needed.
    setIsEditProfileOpen(true);  // Use the correctly named state setter function
  };

  // Placeholder function for Dashboard click action
  const handleDashboardClick = () => {
    // Placeholder for actual implementation
    console.log("Dashboard Clicked");
  };

  // Placeholder function for View Calendar click action
  const handleViewCalendar = () => {
    // Placeholder for actual implementation
    console.log("View Calendar Clicked");
  };


  return (
      <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      {/* <img src={userProfile.profileImage} alt="Profile" className="profile-icon" /> */}
      <button
        className="sidebar-item hamburger"
        style={{ backgroundColor: 'beige', color: 'black' }}
        onClick={toggleSidebar}
        onKeyDown={(e) => {
          // Trigger the click event handler when Enter or Space key is pressed
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Prevent default action for Space key (scrolling the page)
            toggleSidebar();
          }
        }}
      >
        <FontAwesomeIcon icon={faBars} className="sidebar-icon" />
      </button>
      <div className="sidebar-item profile">
        <img src={userProfile.profileImage} alt="Profile" className="profile-icon" style={{ display: !isExpanded ? 'block' : 'none' }} />
      {isExpanded && (
        <>
          {/* Large icon only when expanded */}
          <img src={userProfile.profileImage} alt="Profile" className="profile-icon expanded-icon" />
          <button className="sidebar-text-button" onClick={handleEditProfileClick}>
            Edit Profile
          </button>
        </>
      )}
      </div>
      {/* <Modal isOpen={isEditProfileOpen} onClose={closeEditProfileModal} userProfile={userProfile}> */}
      {/* Put your edit profile form or content here */}
      {/* </Modal> */}

      <Modal
      // isOpen={isEditProfileOpen}
      // onClose={closeEditProfileModal}
      // userProfile={userProfile}
      // onUpdate={handleUserProfileUpdate} // Pass the update handler to Modal
      // >
      key={userProfile.profileImage} // Add key prop for re-render
      isOpen={isEditProfileOpen}
      onClose={closeEditProfileModal}
      userProfile={userProfile}
      onUpdate={handleUserProfileUpdate} // Pass the update handler to Modal
      >
      {/* Modal content */}
      </Modal>

      <div className="sidebar-item" style={{ backgroundColor: 'beige', color: 'black' }}>
        <button className="sidebar-button" onClick={handleDashboardClick}>
          <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
          <span className="sidebar-text">
          <Link to="/home_Dashboard" style={{ color: 'black', textDecoration: 'none' }}> Dashboard </Link>
        </span>
        </button>
      </div>

      <button
        className="sidebar-item"
        style={{ backgroundColor: 'beige', color: 'black' }}
        onClick={exportToCsv}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Prevent default action for Space key (scrolling the page)
            exportToCsv();
          }
        }}
      >
        <div className="sidebar-button" style={{ backgroundColor: 'beige', color: 'black' }}>
          <FontAwesomeIcon icon={faFileExport} className="sidebar-icon" />
          <span className="sidebar-text">Export Job</span>
        </div>
      </button>



    <div className="sidebar-item" style={{ backgroundColor: 'beige', color: 'black' }}>
      <button className="sidebar-button" onClick={handleViewCalendar}>
        <FontAwesomeIcon icon={faCalendarAlt} className="sidebar-icon" />
        <span className="sidebar-text"><Link to="/view_calender" style={{ color: 'black', textDecoration: 'none' }}>View Calendar</Link></span>
      </button>
    </div>
      <div className="sidebar-item" style={{ backgroundColor: 'beige', color: 'black' }}>
      <button className="sidebar-button" onClick={handleViewCalendar}>
        <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
        <span className="sidebar-text">
          <Link to="/data_visualize" style={{ color: 'black', textDecoration: 'none' }}>View Graph</Link>
        </span>
        </button>
      </div>
      <div className="sidebar-item logout">
      <Link to="/login" className="sidebar-button" onClick={handleLogoutClick}>
        <FontAwesomeIcon icon={faSignOutAlt} className="sidebar-icon" />
        <span className="sidebar-text">Logout</span>
      </Link>
    </div>

    {/* Include other sidebar items here if any */}
  </div>
  );
};

export default Sidebar;