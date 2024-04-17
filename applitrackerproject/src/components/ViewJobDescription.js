import React, { useState } from 'react';

function ViewJobDescription({ job }) {
  const [isEditing, setIsEditing] = useState(false);
  const [jobDetails, setJobDetails] = useState(job);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobDetails(prevJob => ({
      ...prevJob,
      [name]: value
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
      <h1>Job Details</h1>
      {!isEditing ? (
        <div>
          <p><strong>Company:</strong> {jobDetails.company}</p>
          <p><strong>Title:</strong> {jobDetails.title}</p>
          <p><strong>Job Description:</strong> {jobDetails.jobDescription}</p>
          <p><strong>Location:</strong> {jobDetails.location}</p>
          <p><strong>Date Applied:</strong> {jobDetails.dateApplied}</p>
          <p><strong>Application Route:</strong> {jobDetails.applicationRoute}</p>
          <p><strong>Outreach Contact:</strong> {jobDetails.outreachContact}</p>
          <p><strong>Email Followup:</strong> {jobDetails.emailFollowup}</p>
          <p><strong>Application Status:</strong> {jobDetails.appStatus}</p>
          <p><strong>Job Number:</strong> {jobDetails.jobNumber}</p>
          <p><strong>Pay Amount:</strong> {jobDetails.payAmount}</p>
          <p><strong>Pay Type:</strong> {jobDetails.payType}</p>
          <p><strong>Priority Level:</strong> {jobDetails.priorityLevel}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      ) : (
        <div>
          <label>Company: <input type="text" name="company" value={jobDetails.company} onChange={handleChange} /></label>
          <label>Title: <input type="text" name="title" value={jobDetails.title} onChange={handleChange} /></label>
          <label>Job Description: <textarea name="jobDescription" value={jobDetails.jobDescription} onChange={handleChange} /></label>
          <label>Location: <input type="text" name="location" value={jobDetails.location} onChange={handleChange} /></label>
          <label>Date Applied: <input type="date" name="dateApplied" value={jobDetails.dateApplied} onChange={handleChange} /></label>
          <label>Application Route: <input type="text" name="applicationRoute" value={jobDetails.applicationRoute} onChange={handleChange} /></label>
          <label>Outreach Contact: <input type="text" name="outreachContact" value={jobDetails.outreachContact} onChange={handleChange} /></label>
          <label>Email Followup: <input type="email" name="emailFollowup" value={jobDetails.emailFollowup} onChange={handleChange} /></label>
          <label>Application Status: <input type="text" name="appStatus" value={jobDetails.appStatus} onChange={handleChange} /></label>
          <label>Job Number: <input type="number" name="jobNumber" value={jobDetails.jobNumber} onChange={handleChange} /></label>
          <label>Pay Amount: <input type="number" name="payAmount" value={jobDetails.payAmount} onChange={handleChange} /></label>
          <label>Pay Type: <select name="payType" value={jobDetails.payType} onChange={handleChange}>
            <option value="hourly">Hourly</option>
            <option value="yearly">Yearly</option>
            <option value="monthly">Monthly</option>
          </select></label>
          <label>Priority Level: <select name="priorityLevel" value={jobDetails.priorityLevel} onChange={handleChange}>
            <option value="High">High</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Low">Low</option>
          </select></label>
          <button onClick={saveChanges}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default ViewJobDescription;
