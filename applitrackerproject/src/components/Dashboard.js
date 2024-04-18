import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Sidebar from './Sidebar';
import JobFilter from './JobFilter';
import JobList from './JobList';
import './Dashboard.css';  // Ensure you have the required CSS

const Dashboard = ({ jobs }) => {
  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState({
    username: 'Manasi',
    email: 'manasi@gmail.com',
    job_title: '',
    description: '',
    details: '',
    location: '',
    applied_date: '',
    weblink: '',
    stage: 'Applied',
    type: '',
    payment: '',
    payment_type: 'hourly', // default set to 'hourly'
    priority: 'Low', // default set to 'Low'
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const submitJobDetails = async (event) => {
    event.preventDefault();
    const apiEndpoint = 'http://localhost:8000/createjob'; // Replace with the actual endpoint
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newJob),
    };

    try {
      const response = await fetch(apiEndpoint, requestOptions);
      const responseData = await response.json();
      if (response.ok) {
        console.log('Job added:', responseData);
        setNewJob({  // Reset the form fields
          username: 'Manasi',
          email: 'manasi@gmail.com',
          job_title: '',
          description: '',
          details: '',
          location: '',
          applied_date: '',
          weblink: '',
          stage: 'Applied',
          type: '',
          payment: '',
          payment_type: 'hourly',
          priority: 'Low',
        });
        closeModal();
      } else {
        console.error('Failed to add job:', responseData);
      }
    } catch (error) {
      console.error('Failed to send job details:', error);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <div className="filter-background">
          <br/>
          <p className='projectTitle'>Appli Tracker</p>
          <p className='subTitle'><i>"If opportunity doesn't <b>knock</b>, build a <b>door</b>"</i></p>
          <JobFilter />
        </div>        
        <JobList jobs={jobs} />
        <Button className="add-job-button" onClick={openModal}>Add Job</Button>

        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Job Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitJobDetails}>
              {/* Example form group, repeat this pattern for other fields */}
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter company name"
                  name="company"
                  value={newJob.job_title}
                  onChange={(e) => setNewJob({ ...newJob, job_title: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter job title"
                  name="title"
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Description</Form.Label>
                <Form.Control 
                  as="textarea"
                  placeholder="Enter job description"
                  name="jobDescription"
                  value={newJob.details}
                  onChange={(e) => setNewJob({ ...newJob, details: e.target.value})}
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
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date Applied</Form.Label>
                <Form.Control 
                  type="date"
                  name="dateApplied"
                  value={newJob.applied_date}
                  onChange={(e) => setNewJob({ ...newJob, applied_date: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Weblink</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter weblink through which you applied"
                  name="outreachContact"
                  value={newJob.weblink}
                  onChange={(e) => setNewJob({ ...newJob, weblink: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Application Status</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter application status"
                  name="appStatus"
                  value={newJob.stage}
                  onChange={(e) => setNewJob({ ...newJob, stage: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Type (Co-op/Intern/Full-time)</Form.Label>
                <Form.Control 
                  as="select"
                  name="type"
                  value={newJob.type}
                  onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                  required
                >
                  <option value="">Select a type</option>
                  <option value="Co-op">Co-op</option>
                  <option value="Intern">Intern</option>
                  <option value="Full-time">Full-time</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pay Amount</Form.Label>
                <Form.Control 
                  type="number"
                  placeholder="Enter pay amount"
                  name="payAmount"
                  value={newJob.payment}
                  onChange={(e) => setNewJob({ ...newJob, payment: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pay Type</Form.Label>
                <Form.Control 
                  as="select"
                  name="payType"
                  value={newJob.payment_type}
                  onChange={(e) => setNewJob({ ...newJob, payment_type: e.target.value })}
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
                      checked={newJob.priority === 'High'}
                      onChange={(e) => setNewJob({ ...newJob, priority: e.target.value })}
                      required
                    />
                    <Form.Check 
                      inline
                      type="radio"
                      label="Intermediate"
                      name="priorityLevel"
                      value="Intermediate"
                      checked={newJob.priority === 'Intermediate'}
                      onChange={(e) => setNewJob({ ...newJob, priority: e.target.value })}
                      required
                    />
                    <Form.Check 
                      inline
                      type="radio"
                      label="Low"
                      name="priorityLevel"
                      value="Low"
                      checked={newJob.priority === 'Low'}
                      onChange={(e) => setNewJob({ ...newJob, priority: e.target.value })}
                      required
                    />
                  </div>
                </Form.Group>
              </fieldset>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;




