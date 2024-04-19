import React , { useState, useEffect } from 'react';
import CalendarView from './CalenderView.js';
import TaskForm from './TaskForm.js';
import Sidebar from './Sidebar'; // Adjust the path if necessary
import './Dashboard.css';  // Ensure you have the required CSS


function CV() {
    const [showCalendar, setShowCalendar] = useState(false);
    // const toggleCalendar = () => {
    //     setShowCalendar(!showCalendar);
    //   };

      const [tasks, setTasks] = useState([
        { date: '2024-04-10', type: 'Meeting', content: 'Project discussion with team.' },
        { date: '2024-04-15', type: 'Deadline', content: 'Submit project report.' },
        { date: '2024-04-20', type: 'Event', content: 'Team building event.' }
      ]);
    
      const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
      };
    //  App.js file added ok
    return (

        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-main">
            {/* {showCalendar && ( */}
        <div className="App">
          <CalendarView tasks={tasks} />
          <TaskForm addTask={addTask} />
        </div>
      {/* )} */}
            </div>
        </div>
    );
}
export default CV;
