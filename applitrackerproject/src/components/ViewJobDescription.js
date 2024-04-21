import React, { useState, useEffect } from 'react';

function ViewJobDescription({ job }) {
  const [editMode, setEditMode] = useState(null); // null, 'status', 'priority'
  const [jobDetails, setJobDetails] = useState(job);
  const [newStage, setNewStage] = useState(job.stage);
  const [newPriority, setNewPriority] = useState(job.priority); // State to handle the priority

  // Handle change in inputs for stage and priority
  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobDetails((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
    if (name === 'stage') {
      setNewStage(value);
    }
    if (name === 'priority') {
      setNewPriority(value);
    }
  };

  // Set edit mode
  const startEdit = (mode) => {
    setEditMode(mode);
  };

  // Update stage details when edit mode is closed and stage has changed
  useEffect(() => {
    if (editMode === null && newStage !== job.stage) {
      updateStageDetails();
    }
  }, [editMode, newStage, job.stage]);

  // Update priority details when edit mode is closed and priority has changed
  useEffect(() => {
    if (editMode === null && newPriority !== job.priority) {
      updatePriorityDetails();
    }
  }, [editMode, newPriority, job.priority]);

  // Save changes and reset edit mode
  const saveChanges = () => {
    setEditMode(null);
  };

  // Cancel edits and reset state to initial job details
  const cancelEdit = () => {
    setEditMode(null);
    setJobDetails(job);
    setNewStage(job.stage);
    setNewPriority(job.priority);
  };

  // Function to update stage details on the server
  const updateStageDetails = async () => {
    try {
      const response = await fetch('http://localhost:8000/update_stage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: job._id,
          stage: newStage
        }),
      });

      if (response.ok) {
        const jsonOutput = await response.json();
        console.log("Success: ", jsonOutput);
      } else {
        console.error(`HTTP error: ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  // Function to update priority details on the server
  const updatePriorityDetails = async () => {
    try {
      const response = await fetch('http://localhost:8000/assign_priority', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: job._id,
          priority: newPriority
        }),
      });

      if (response.ok) {
        const jsonOutput = await response.json();
        console.log("Success: ", jsonOutput);
      } else {
        console.error(`HTTP error: ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  // Style for inputs
  const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    marginBottom: '10px',
  };

  return (
    <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
      <h1>Job Details</h1>
      {editMode === null ? (
        <div>
          <p><strong>Company:</strong> {jobDetails.job_title}</p>
          <p><strong>Title:</strong> {jobDetails.description}</p>
          <p><strong>Job Description:</strong> {jobDetails.details}</p>
          <p><strong>Location:</strong> {jobDetails.location}</p>
          <p><strong>Date Applied:</strong> {jobDetails.applied_date}</p>
          <p><strong>Weblink:</strong> {jobDetails.weblink}</p>
          <p><strong>Application Status:</strong> {jobDetails.stage}</p>
          <p><strong>Job Type:</strong> {jobDetails.type}</p>
          <p><strong>Pay Amount:</strong> {jobDetails.payment}</p>
          <p><strong>Pay Type:</strong> {jobDetails.payment_type}</p>
          <p><strong>Priority Level:</strong> {jobDetails.priority}</p>
          <button onClick={() => startEdit('status')} style={{ padding: '10px 20px', marginRight: '10px' }}>Update Status</button>
          <button onClick={() => startEdit('priority')} style={{ padding: '10px 20px', marginRight: '10px' }}>Update Priority</button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
          {editMode === 'status' && (
            <select
              name="stage"
              value={jobDetails.stage}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Assessment">Assessment</option>
              <option value="Reject">Reject</option>
            </select>
          )}
          {editMode === 'priority' && (
            <select
              name="priority"
              value={jobDetails.priority}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="High">High</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Low">Low</option>
            </select>
          )}
          <button onClick={saveChanges} style={{ ...inputStyle, fontWeight: 'bold', cursor: 'pointer' }}>
            Save
          </button>
          <button onClick={cancelEdit} style={{ ...inputStyle, fontWeight: 'bold', cursor: 'pointer' }}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default ViewJobDescription;
