import React, { useState } from 'react';
import './TaskForm.css';

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
    setTaskDate('');
    setTaskType('');
    setTaskContent('');
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

export default TaskForm;
