import React, { useState } from 'react';
import './TaskForm.css';
import PropTypes from 'prop-types'; // Import PropTypes

function TaskForm({ addTask }) {
  const [taskDate, setTaskDate] = useState('');
  const [taskType, setTaskType] = useState('');
  const [taskContent, setTaskContent] = useState('');

  const handleSubmit = () => {
    if (!taskDate || !taskType || !taskContent) {
      alert("All fields are required!");
      return;
    }
    addTask({ date: taskDate, type: taskType, content: taskContent });
    saveToDo();
    setTaskDate('');
    setTaskType('');
    setTaskContent('');
  };

  const saveToDo = async () => {
    try {
      // Parse and format the taskDate to mm/dd/yyyy format
      const [year, month, day] = taskDate.split('-');
      const formattedDate = `${month}/${day}/${year}`;

      const response = await fetch('http://localhost:8000/add_todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Specify content type as JSON
        },
        body: JSON.stringify({ // Convert object to JSON string
          username: 'Manasi',
          email: 'manasi@gmail.com',
          title: taskType,
          deadline: formattedDate, // Use the formatted date
          description: taskContent
        }),
      });
      console.log(response)
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <div id="newTaskForm">
      <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} required />
      <input type="text" value={taskType} onChange={(e) => setTaskType(e.target.value)} placeholder="Type of Task" required />
      <input type="text" value={taskContent} onChange={(e) => setTaskContent(e.target.value)} placeholder="Task Details" required />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}
// PropTypes validation
TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};
export default TaskForm;
