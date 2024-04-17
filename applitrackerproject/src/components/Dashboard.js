import React, { useState } from 'react';
import Sidebar from './Sidebar';
import JobFilter from './JobFilter';
import JobList from './JobList';
import { Button, Modal, Form } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = ({ jobs }) => {
  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState({
    company: '',
    title: '',
    jobDescription: '',
    location: '',
    dateApplied: '',
    applicationRoute: '',
    outreachContact: '',
    emailFollowup: '',
    appStatus: '',
    jobNumber: '',
    payAmount: '',
    payType: 'hourly', // default set to 'hourly'
    priorityLevel: 'Low', // default set to 'Low'
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "radio") {
      setNewJob({ ...newJob, [name]: checked ? value : newJob[name] });
    } else if (type === "checkbox") {
      setNewJob({ ...newJob, [name]: checked });
    } else {
      setNewJob({ ...newJob, [name]: value });
    }
  };

  const submitJobDetails = (event) => {
    event.preventDefault();
    console.log(newJob);
    closeModal();
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <div className="filter-background">
          <br></br>
          <p className='projectTitle'>Appli Tracker</p>
          <p className='subTitle'><i>"If opportunity doesn't <b>knock</b>, build a <b>door</b>"</i></p>
          <JobFilter />
        </div>        
        <JobList jobs={jobs} />
        <Button className="add-job-button" onClick={openModal}>
          Add Job
        </Button>

        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Job Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitJobDetails}>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter company name"
                  name="company"
                  value={newJob.company}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter job title"
                  name="title"
                  value={newJob.title}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Description</Form.Label>
                <Form.Control 
                  as="textarea"
                  placeholder="Enter job description"
                  name="jobDescription"
                  value={newJob.jobDescription}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Location</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter job location"
                  name="location"
                  value={newJob.location}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date Applied</Form.Label>
                <Form.Control 
                  type="date"
                  name="dateApplied"
                  value={newJob.dateApplied}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Application Route</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter application route"
                  name="applicationRoute"
                  value={newJob.applicationRoute}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Outreach Contact</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter outreach contact"
                  name="outreachContact"
                  value={newJob.outreachContact}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Followup</Form.Label>
                <Form.Control 
                  type="email"
                  placeholder="Enter email for followup"
                  name="emailFollowup"
                  value={newJob.emailFollowup}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Application Status</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter application status"
                  name="appStatus"
                  value={newJob.appStatus}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Number</Form.Label>
                <Form.Control 
                  type="number"
                  placeholder="Enter job number"
                  name="jobNumber"
                  value={newJob.jobNumber}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pay Amount</Form.Label>
                <Form.Control 
                  type="number"
                  placeholder="Enter pay amount"
                  name="payAmount"
                  value={newJob.payAmount}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pay Type</Form.Label>
                <Form.Control 
                  as="select"
                  name="payType"
                  value={newJob.payType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="hourly">Hourly</option>
                  <option value="yearly">Yearly</option>
                  <option value="monthly">Monthly</option>
                </Form.Control>
              </Form.Group>
              <fieldset className="mb-3">
                <Form.Group>
                  <Form.Label>Priority Level</Form.Label>
                  <div>
                    <Form.Check 
                      inline
                      type="radio"
                      label="High"
                      name="priorityLevel"
                      value="High"
                      checked={newJob.priorityLevel === 'High'}
                      onChange={handleInputChange}
                      required
                    />
                    <Form.Check 
                      inline
                      type="radio"
                      label="Intermediate"
                      name="priorityLevel"
                      value="Intermediate"
                      checked={newJob.priorityLevel === 'Intermediate'}
                      onChange={handleInputChange}
                      required
                    />
                    <Form.Check 
                      inline
                      type="radio"
                      label="Low"
                      name="priorityLevel"
                      value="Low"
                      checked={newJob.priorityLevel === 'Low'}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </Form.Group>
              </fieldset>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;





