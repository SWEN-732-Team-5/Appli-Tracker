import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './JobCard.css'; // Make sure to update your CSS file accordingly
import ViewJobDescription from './ViewJobDescription';
import logo from './img/google.png';  // Path to the logo image file

const JobCard = ({ job }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="job-card">
      <div className="job-card-header">
        {/* <img src={job.logo} className="company-logo" /> */}
        <img src={logo} alt="Logo" className="company-logo" />
        <div className="job-info">
          <h3 className="job-title">{job.title}</h3>
          <p className="company-name">{job.company}</p>
        </div>
      </div>
      <div className="job-description">
        {/* <p>{job.description}</p> */}
        <p className="job-salary">{job.salary}</p>

      </div>
      <div className="job-footer">
        <div className="job-tags">
          <span className="job-type">{job.type}</span>
          <span className="job-category">{job.category}</span>
          <span className="job-location">{job.location}</span>
        </div>
        <div className="salary-apply">
          <Button className="details-button" onClick={handleShowModal}>View Details</Button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Job Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ViewJobDescription job={job} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JobCard;












// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import './JobCard.css';
// import ViewJobDescription from './ViewJobDescription';  // Assuming JobDetails is in the same directory
// import logo from './img/google.png';  // Path to the logo image file


// const JobCard = ({ job }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleShowModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   return (
//     <div className="job-card">
//       <div className="job-title-logo">
//        <img src={logo} alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
//         {/* <img src={job.logo} alt="Logo" style={{ height: '30px', marginRight: '10px' }} /> */}
//         <p>{job.company}</p>
//         <h3>{job.title}</h3>
//       </div>
//       <p>{job.salary}</p>
//       <p>{job.type}</p>
//       <button onClick={handleShowModal}>View Details</button>

//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Job Application</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <ViewJobDescription job={job} />  {/* Pass the job as a prop if you need to use it */}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default JobCard;
