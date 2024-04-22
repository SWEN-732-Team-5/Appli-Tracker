import React, { useState } from 'react';
import { Table, Button, Container, Row, Col, Form, Modal } from 'react-bootstrap';
import './css/Dashboards.css';

// Dummy data for the purpose of this example
const applicationsData = [
  { id: 1, name: 'John Doe', position: 'Frontend Developer', status: 'Pending' },
  { id: 2, name: 'Jane Smith', position: 'Backend Developer', status: 'Reviewed' },
  { id: 3, name: 'Emily Johnson', position: 'Designer', status: 'Interviewed' },
];

function Dashboards() {
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
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Appli-Tracker</h2>
        </Col>
      </Row>
      <Row className="mt-3">
            <Col>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextSearch">
                <Form.Label column sm="2">
                    Search
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="Search by name, position..." />
                </Col>
                </Form.Group>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {applications.map((application) => (
                    <tr key={application.id}>
                    <td>{application.id}</td>
                    <td>{application.name}</td>
                    <td>{application.position}</td>
                    <td>{application.status}</td>
                    <td>
                        <Button variant="info" size="sm">View</Button>
                        {' '}
                        <Button variant="primary" size="sm">Edit</Button>
                        {' '}
                        <Button variant="danger" size="sm">Delete</Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Col>
        </Row>
      {/* ... rest of your components */}
      <Button variant="primary" className="add-job-button" onClick={openModal}>
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
    </Container>
  );
}

export default Dashboards;