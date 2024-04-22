import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function ViewJobDescription({ job }) {
  const [editMode, setEditMode] = useState(null); // null, 'status', 'priority'
  const [jobDetails, setJobDetails] = useState(job);
  const [newStage, setNewStage] = useState(job.stage);
  const [newPriority, setNewPriority] = useState(job.priority); // State to handle the priority

  const [selectedFile, setSelectedFile] = useState(null);
  const [newAttachment, setNewAttachment] = useState(job.attachment);

  const fileInputRef = useRef(null);
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
    if (name === 'attachment'){
      setNewAttachment(value);
    }
  };

   // Update attachment details when edit mode is closed and attachment has changed
   useEffect(() => {
    if (editMode === null && newAttachment !== job.attachment) {
      updateAttachmentDetails();
    }
  }, [editMode, newAttachment, job.attachment]);
  
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
  const saveChanges = async () => {
    setEditMode(null);
    if (editMode === 'upload') {
      await updateAttachmentDetails(); // This function should handle the file upload
    }
    setEditMode(null);
  };

  // Cancel edits and reset state to initial job details
  const cancelEdit = () => {
    setEditMode(null);
    setJobDetails(job);
    setNewStage(job.stage);
    setNewPriority(job.priority);
    setSelectedFile(null);
    setNewAttachment(job.attachment);
  };

  // Function to update the attachment on the server
  const updateAttachmentDetails = async () => {
    try {
      const response = await fetch('http://localhost:8000/add_attachment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: job._id,
          attachment: 'https://drive.google.com/file/d/1AiNRDgagayVKU1PU9lV8lAy66rMFQ84J/view?usp=drive_link'
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

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSelectFileClick = () => {
    fileInputRef.current.click();
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
    marginTop: '25px', // Add space above the Select File button
  };

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    width: '515px', // Adjust the width as needed
    minHeight: '430px', // Set minimum height for the popup
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Add some shadow for better visibility
    borderRadius: '8px',
    zIndex: 1000, // Ensure it's on top of other elements
    textAlign: 'center', // Center-align the text
  };

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center', // Center-align buttons
    justifyContent: 'space-between', // This spreads out the buttons
    marginTop: '60px', // Add space between buttons and the file input or text
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999, // Directly behind the popup
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginRight: '10px',
    marginBottom: '10px', // Add space below each button
  };
  
  const closeAllPopUps = () => {
    setEditMode(null); // Close the current pop-up
    setJobDetails(job);
  };

  return (
    <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
      <h1>Job Details</h1>
      {editMode === 'upload' && (
        <>
              <button
                style={overlayStyle}
                onClick={cancelEdit}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    cancelEdit();
                  }
                }}
                tabIndex={0} // Add tabIndex={0} to make the button focusable
              ></button>
              <div style={popupStyle}>
              <h2>Upload File</h2>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <button onClick={handleSelectFileClick} style={inputStyle}>Select File</button>
              {selectedFile && <p>{selectedFile.name}</p>} {/* Show selected file name */}
              <div style={buttonContainerStyle}> 
                <button onClick={saveChanges} style={buttonStyle}>
                  Submit
                </button>
                <button onClick={cancelEdit} style={buttonStyle}>
                  Cancel
                </button>
              </div>
              <button onClick={closeAllPopUps} style={{ ...buttonStyle, position: 'absolute', bottom: '20px', right: '20px' }}>
                Close
              </button>
            </div>
        </>
      )}
      
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
          <p><strong>Attachments:</strong></p>
            <ul style={{ padding: '10px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {jobDetails.attachments?.map((attachment, index) => (
                <li key={attachment} style={{ 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis',
                  width: '100%'  // Ensure the width is set if it's not filling the container
                }}>
                  <a href={attachment} target="_blank" rel="noopener noreferrer" style={{
                    display: 'block', // Makes the anchor fill the li, improving clickable area
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {attachment}
                  </a>
                </li>
              ))}
            </ul>


          <button onClick={() => startEdit('status')} style={{ padding: '10px 20px', marginRight: '10px' }}>Update Status</button>
          <button onClick={() => startEdit('priority')} style={{ padding: '10px 20px', marginRight: '10px' }}>Update Priority</button>
          <button onClick={() => startEdit('upload')} style={{ padding: '10px 20px' }}>Upload File</button>
          <input
            type="file"
            ref={fileInputRef} // Step 4: File input element
            onChange={handleFileChange}
            style={{ display: 'none' }} // Hide the file input
          /> 
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
// PropTypes validation
ViewJobDescription.propTypes = {
  job: PropTypes.object.isRequired,
};
export default ViewJobDescription;
