import React, { useState, useEffect } from 'react';
import './CalenderView.css';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function CalendarView({ tasks }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    renderCalendar();
  }, [currentDate]); // Dependency on currentDate to re-render

  const changeMonth = (months) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + months);
    setCurrentDate(newDate);
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    let days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="day"></div>); // Empty cells
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayTasks = tasks.filter(task => task.date === dateStr).map(task => (
        <div className="task">{task.type}: {task.content}</div>
      ));

      days.push(
        <div className="day">{day}{dayTasks}</div>
      );
    }

    return days;
  };

  return (
    <div id="taskCalendar">
      <button onClick={() => changeMonth(-1)}>Previous</button>
      <button onClick={() => changeMonth(1)}>Next</button>
      <h2 id="monthLabel">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
      <div id="calendarDays">
        {renderCalendar()}
      </div>
    </div>
  );
}

export default CalendarView;
