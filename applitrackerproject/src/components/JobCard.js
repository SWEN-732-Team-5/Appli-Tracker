import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './JobCard.css';
import ViewJobDescription from './ViewJobDescription';  // Assuming JobDetails is in the same directory

const JobCard = ({ job }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.salary}</p>
      <p>{job.type}</p>
      <button onClick={handleShowModal}>Apply Now</button>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Job Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ViewJobDescription job={job} />  {/* Pass the job as a prop if you need to use it */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JobCard;



//old code
// import React, { useState } from 'react';
// import './JobCard.css';

// const JobCard = ({ job }) => {
//   const [viewDetails, setViewDetails] = useState(false);

//   const toggleViewDetails = () => {
//     setViewDetails(!viewDetails);
//   };

//   return (
//     <div className="job-card">
//       <h3>{job.title}</h3>
//       <p>{job.company}</p>
//       <p>{job.salary}</p>
//       <p>{job.type}</p>
//       <button onClick={toggleViewDetails}>Apply Now</button>
//       {viewDetails && <JobDetails job={job} />}
//     </div>
//   );
// };

// function JobDetails({ job }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentJob, setCurrentJob] = useState(job);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setCurrentJob(prevJob => ({
//         ...prevJob,
//         [name]: value
//     }));
//   };

//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const saveChanges = () => {
//     setIsEditing(false);
//     // Optionally update the job state in a global context or via props if needed
//   };

//   const cancelEdit = () => {
//     setIsEditing(false);
//     setCurrentJob(job); // Revert changes if cancelled
//   };

//   if (!isEditing) {
//     return (
//       <div>
//         <p><strong>Company:</strong> {currentJob.company}</p>
//         <p><strong>Title:</strong> {currentJob.title}</p>
//         <p><strong>Job Description:</strong> {currentJob.jobDescription}</p>
//         <p><strong>Location:</strong> {currentJob.location}</p>
//         <button onClick={toggleEdit}>Edit</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <label>
//           Company
//           <input type="text" name="company" value={currentJob.company} onChange={handleChange} />
//         </label>
//         {/* Add other inputs similar to the company input above */}
//         <button onClick={saveChanges}>Save</button>
//         <button onClick={cancelEdit}>Cancel</button>
//       </div>
//     );
//   }
// }

// export default JobCard;



// //code
// // import React from 'react';
// // import './JobCard.css';

// // const JobCard = ({ job }) => {
// //   return (
// //     <div className="job-card">
// //       <h3>{job.title}</h3>
// //       <p>{job.company}</p>
// //       <p>{job.salary}</p>
// //       <p>{job.type}</p>
// //       <button>Apply Now</button>
// //     </div>
// //   );
// // };

// // export default JobCard;
