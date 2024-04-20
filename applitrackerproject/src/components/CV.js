import React , { useState , useEffect } from 'react';
import CalendarView from './CalenderView.js';
import TaskForm from './TaskForm.js';
import Sidebar from './Sidebar'; // Adjust the path if necessary
import './Dashboard.css';  // Ensure you have the required CSS


function Cv() {
    // const [] = useState(false);

      const [tasks, setTasks] = useState([]);
    
      const addTask = (newTask) => {
        // setTasks([...tasks, newTask]);
      };

      // useEffect(() => {
      //   fetchToDo();
      // }, []);

      // const [taskDetails, setTaskDetail] = useState([]);
      // const fetchToDo = async (month, year) => {
      //   try {
      //     // const monthYear = `${String(month).padStart(2, '0')}/${year}`;
    
      //      const response = await fetch('http://localhost:8000/monthly_todos', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json' // Specify content type as JSON
      //       },
      //       body: JSON.stringify({ // Convert object to JSON string
      //         username: 'Manasi',
      //         email: 'manasi@gmail.com',
      //         monthyear: '04/2024'
      //       }),
      //     });
    
      //     if (response.ok) 
      //       {
      //           const jsonOutput = await response.json();
      //           setTasks(jsonOutput);
      //       } 
      //       else
      //       {
      //           console.error(`HTTP error: ${response.status}: ${response.statusText}`);
      //           setTasks("");
      //       }
      //   } catch (error) {
      //     console.error('Error fetching jobs:', error);
      //   }
      // };




    //  App.js file added ok
    return (

        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-main">
            {/* {showCalendar && ( */}
        <div className="App">
          {/* <CalendarView tasks={tasks} /> */}
          <CalendarView />
          <TaskForm addTask={addTask} />
        </div>
      {/* )} */}
            </div>
        </div>
    );
}
export default Cv;
