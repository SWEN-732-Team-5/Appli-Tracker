import React from 'react';
import CalendarView from './CalenderView.js';
import TaskForm from './TaskForm.js';
import Sidebar from './Sidebar'; // Adjust the path if necessary
import './Dashboard.css';  // Ensure you have the required CSS


function Cv() {    
      const addTask = (newTask) => {
      };

    return (

        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-main">
              <div className="App">
                <CalendarView />
                <TaskForm addTask={addTask} />
              </div>
            </div>
        </div>
    );
}
export default Cv;
