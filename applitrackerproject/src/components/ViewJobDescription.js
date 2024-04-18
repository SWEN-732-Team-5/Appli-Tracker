import React, { useState } from 'react';

function ViewJobDescription({ job }) {
  const [isEditing, setIsEditing] = useState(false);
  const [jobDetails, setJobDetails] = useState(job);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobDetails((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    setIsEditing(false);
    // TODO: Persist changes
  };

  const cancelEdit = () => {
    setIsEditing(false);
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
      {!isEditing ? (
        <div>
          <p><strong>Company:</strong> {jobDetails.job_title}</p>
          <p><strong>Title:</strong> {jobDetails.description}</p>
          <p><strong>Job Description:</strong> {jobDetails.details}</p>
          <p><strong>Location:</strong> {jobDetails.location}</p>
          <p><strong>Date Applied:</strong> {jobDetails.applied_date}</p>
          {/* <p><strong>Application Route:</strong> {jobDetails.applicationRoute}</p> */}
          <p><strong>Weblink:</strong> {jobDetails.weblink}</p>
          {/* <p><strong>Email Followup:</strong> {jobDetails.emailFollowup}</p> */}
          <p><strong>Application Status:</strong> {jobDetails.stage}</p>
          <p><strong>Job Type:</strong> {jobDetails.type}</p>
          <p><strong>Pay Amount:</strong> {jobDetails.payment}</p>
          <p><strong>Pay Type:</strong> {jobDetails.payment_type}</p>
          <p><strong>Priority Level:</strong> {jobDetails.priority}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
          <input
            type="text"
            name="job_title"
            value={jobDetails.job_title}
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            placeholder="Company"
          />
          <input
            type="text"
            name="description"
            value={jobDetails.description}
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            placeholder="Title"
          />
          <textarea
            name="details"
            value={jobDetails.details}
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            placeholder="Job Description"
          />
          <input
            type="text"
            name="location"
            value={jobDetails.location}
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            placeholder="Location"
          />
          <input
            type="date"
            name="applied_date"
            value={jobDetails.applied_date}
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
          />
          <input
            type="text"
            name="weblink"
            value={jobDetails.weblink}
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            placeholder="Weblink"
          />
          <input
            type="text"
            name="stage"
            value={jobDetails.stage}
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            placeholder="Application Status"
          />
          <input
            type="text"
            name="type"
            value={jobDetails.type}
                  onChange={(e) => setJobDetails({ ...jobDetails, job_title: e.target.value })}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            placeholder="Job Type"
          />

{/* <select
  name="type"
  value={jobDetails.type}
  onChange={(e) => setNewJob({ ...newJob, job_title: e.target.value })}
  style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
>
  <option value="">Select Job Type</option>
  <option value="co-op">Co-op</option>
  <option value="full-time">Full-time</option>
  <option value="internship">Internship</option>
</select> */}

          <input
            style={inputStyle}
            type="text"
            name="payment"
            value={jobDetails.payment}
            onChange={handleChange}
            placeholder="Pay Amount"
          />
          <select
            style={inputStyle}
            name="payment_type"
            value={jobDetails.payment_type}
            onChange={handleChange}
          >
            <option value="hourly">Hourly</option>
            <option value="yearly">Yearly</option>
            <option value="monthly">Monthly</option>
          </select>
          <select
            style={inputStyle}
            name="priority"
            value={jobDetails.priority}
            onChange={handleChange}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
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

















// import React, { useState } from 'react';

// function ViewJobDescription({ job }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [jobDetails, setJobDetails] = useState(job);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setJobDetails(prevJob => ({
//       ...prevJob,
//       [name]: value
//     }));
//   };

//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const saveChanges = () => {
//     setIsEditing(false);
//   };

//   const cancelEdit = () => {
//     setIsEditing(false);
//   };

//   return (
//     <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
//       <h1>Job Details</h1>
//       {!isEditing ? (
//         <div>
//           <p><strong>Company:</strong> {jobDetails.job_title}</p>
//           <p><strong>Title:</strong> {jobDetails.description}</p>
//           <p><strong>Job Description:</strong> {jobDetails.details}</p>
//           <p><strong>Location:</strong> {jobDetails.location}</p>
//           <p><strong>Date Applied:</strong> {jobDetails.applied_date}</p>
//           {/* <p><strong>Application Route:</strong> {jobDetails.applicationRoute}</p> */}
//           <p><strong>Weblink:</strong> {jobDetails.weblink}</p>
//           {/* <p><strong>Email Followup:</strong> {jobDetails.emailFollowup}</p> */}
//           <p><strong>Application Status:</strong> {jobDetails.stage}</p>
//           <p><strong>Job Type:</strong> {jobDetails.type}</p>
//           <p><strong>Pay Amount:</strong> {jobDetails.payment}</p>
//           <p><strong>Pay Type:</strong> {jobDetails.payment_type}</p>
//           <p><strong>Priority Level:</strong> {jobDetails.priority}</p>
//           <button onClick={toggleEdit}>Edit</button>
//         </div>
//       ) : (
//         <div>
//           <label>Company: <input type="text" name="company" value={jobDetails.job_title} onChange={handleChange} /></label>
//           <label>Title: <input type="text" name="title" value={jobDetails.description} onChange={handleChange} /></label>
//           <label>Job Description: <textarea name="jobDescription" value={jobDetails.details} onChange={handleChange} /></label>
//           <label>Location: <input type="text" name="location" value={jobDetails.location} onChange={handleChange} /></label>
//           <label>Date Applied: <input type="date" name="dateApplied" value={jobDetails.applied_date} onChange={handleChange} /></label>
//           {/* <label>Application Route: <input type="text" name="applicationRoute" value={jobDetails.applicationRoute} onChange={handleChange} /></label> */}
//           <label>Weblink: <input type="text" name="outreachContact" value={jobDetails.weblink} onChange={handleChange} /></label>
//           {/* <label>Email Followup: <input type="email" name="emailFollowup" value={jobDetails.emailFollowup} onChange={handleChange} /></label> */}
//           <label>Application Status: <input type="text" name="appStatus" value={jobDetails.stage
//           } onChange={handleChange} /></label>
//           <label>Job Type: <input type="number" name="jobNumber" value={jobDetails.type} onChange={handleChange} /></label>
//           <label>Pay Amount: <input type="number" name="payAmount" value={jobDetails.payment} onChange={handleChange} /></label>
//           <label>Pay Type: <select name="payType" value={jobDetails.payment_type} onChange={handleChange}>
//             <option value="hourly">Hourly</option>
//             <option value="yearly">Yearly</option>
//             <option value="monthly">Monthly</option>
//           </select></label>
//           <label>Priority Level: <select name="priorityLevel" value={jobDetails.priority} onChange={handleChange}>
//             <option value="High">High</option>
//             <option value="Intermediate">Intermediate</option>
//             <option value="Low">Low</option>
//           </select></label>
//           <button onClick={saveChanges}>Save</button>
//           <button onClick={cancelEdit}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ViewJobDescription;
