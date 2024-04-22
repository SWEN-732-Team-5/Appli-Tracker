import React, { useState, useEffect } from 'react';
import './CalenderView.css';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    renderCalendar();
    fetchToDo(currentDate.getMonth()+1, currentDate.getFullYear());
  }, [currentDate]); // Dependency on currentDate to re-render

  const changeMonth = (months) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + months);
    setCurrentDate(newDate);

    fetchToDo(newDate.getMonth() + 1, newDate.getFullYear()); // Call fetchToDo with updated month and year
  };

  const [taskDetails, setTaskDetails] = useState([]);
  const fetchToDo = async (month, year) => {
    try {
      const monthYear = `${String(month).padStart(2, '0')}/${year}`;

       const response = await fetch('http://localhost:8000/monthly_todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Specify content type as JSON
        },
        body: JSON.stringify({ // Convert object to JSON string
          username: 'Manasi',
          email: 'manasi@gmail.com',
          monthyear: monthYear // Use the formatted month/year value
        }),
      });

      if (response.ok) 
        {
            const jsonOutput = await response.json();
            setTaskDetails(jsonOutput);
        } 
        else
        {
            console.error(`HTTP error: ${response.status}: ${response.statusText}`);
            setTaskDetails("");
        }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    let days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="day"></div>); // Empty cells
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}/${currentDate.getFullYear()}`;
      const dayTasks = taskDetails.filter(task => task.deadline === dateStr).map(task => (
        <div className="task" key={task._id}>{task.title}: {task.description}</div>
      ));

      days.push(
        <div className="day">{day}{dayTasks}</div>
      );
    }

    return days;
  };

  return (
    <div id="taskCalendar">
      <br></br>
      <button onClick={() => changeMonth(-1)} style={{ marginRight: '10px' }}>Previous</button>
      <button onClick={() => changeMonth(1)}>Next</button>
      <h2 id="monthLabel">      <br></br>
      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
      <div id="calendarDays">
        {renderCalendar()}
      </div>
    </div>
  );
}

export default CalendarView;