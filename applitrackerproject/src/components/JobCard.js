import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './JobCard.css'; // Make sure to update your CSS file accordingly
import ViewJobDescription from './ViewJobDescription';

const JobCard = ({ job }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const getLogoImage = (company) => {
    if (company.toLowerCase() === 'google') 
      return <img src={require('./img/j1.png')} alt="Logo" className="company-logo" />;
    else if(company.toLowerCase() === 'amazon')
      return <img src={require('./img/j2.png')} alt="Logo" className="company-logo" />;
    else if(company.toLowerCase() === 'atlassian')
      return <img src={require('./img/j3.png')} alt="Logo" className="company-logo" />;
    else if(company.toLowerCase() === 'oracle')
      return <img src={require('./img/j4.png')} alt="Logo" className="company-logo" />;
    else if(company.toLowerCase() === 'meta')
      return <img src={require('./img/j5.png')} alt="Logo" className="company-logo" />;
    else if(company.toLowerCase() === 'spotify')
      return <img src={require('./img/j6.png')} alt="Logo" className="company-logo" />;
    else    
      return null;
  };

  const getPriorityClassName = (priority) => {
    const priorityLower = priority.toLowerCase();
    if (priorityLower === 'high') {
      return 'priority-high';
    } else if (priorityLower === 'intermediate') {
      return 'priority-medium';
    } else if (priorityLower === 'low') {
      return 'priority-low';
    } else {
      return ''; 
    }
  };


  return (
    <div>
      <br></br>
    <div className="job-card">
      <div className="job-card-header">
      {getLogoImage(job.job_title)}
        <div className="job-info">
          <h3 className="job-title">{job.description}</h3>
          <p className="company-name">{job.job_title}</p>
        </div>
      </div>
      <div className="job-description">
        {/* <p>{job.description}</p> */}
        <p className="job-salary">{job.payment}/{job.payment_type}</p>
        <span><img src={require('./img/loc.png')} alt="Logo" className="location-logo" />{job.location}</span>
      </div>
      <div className="job-footer">
        <div className="job-tags">
          <span className="job-type">{job.type}</span>
          <span className={`job-category ${getPriorityClassName(job.priority)}`}>{job.priority}</span>
          {/* <span className="job-location">{job.location}</span> */}
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
    </div>
  );
};

export default JobCard;