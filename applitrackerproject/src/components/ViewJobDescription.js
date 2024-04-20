import React, { useState } from 'react';

function ViewJobDescription({ job }) {
  const [editMode, setEditMode] = useState(null); // null, 'status', 'priority'
  const [jobDetails, setJobDetails] = useState(job);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobDetails((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const startEdit = (mode) => {
    setEditMode(mode);
  };

  const saveChanges = () => {
    setEditMode(null);
    // TODO: Persist changes
  };

  const cancelEdit = () => {
    setEditMode(null);
    setJobDetails(job); // Reset changes to initial job details
  };

  const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    marginBottom: '10px', // Added for space between inputs
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
            <input
              type="text"
              name="stage"
              value={jobDetails.stage}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Application Status"
            />
          )}
          {editMode === 'priority' && (
            <select
              name="priority"
              value={jobDetails.priority}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
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
