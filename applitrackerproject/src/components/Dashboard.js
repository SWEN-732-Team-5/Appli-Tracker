import React, { useState } from 'react';
import Sidebar from './Sidebar';
import JobFilter from './JobFilter';
import JobList from './JobList';
import { Button, Modal, Form } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = ({ jobs }) => {
  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState({ title: '', company: '', location: '' });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const submitJobDetails = (event) => {
    event.preventDefault();
    // Logic to handle job detail submission goes here.
    // For now, just close the modal after submission and log the new job to the console
    console.log(newJob);
    closeModal();
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <JobFilter />
        <JobList jobs={jobs} />
        <Button className="add-job-button" onClick={openModal}>
          Add Job
        </Button>

        {/* Modal for Adding Job Details */}
        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Job Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitJobDetails}>
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
