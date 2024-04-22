import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Sidebar from './Sidebar'; // Adjust the path if necessary
import JobList from './JobList';
import './Dashboard.css';  // Ensure you have the required CSS
import PropTypes from 'prop-types';

const Dashboard = ({ jobs, setJobDetail }) => {

  Dashboard.propTypes = {
    jobs: PropTypes.array.isRequired,
    setJobDetail: PropTypes.func.isRequired
  };
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState('none'); // State for filter type
  const [filterValue, setFilterValue] = useState(''); // State for filter value
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

  const applyFilter = async () => {
    
    if (filterType === 'none') {
      // Handle error or return early
      return;
    }

    try {
      const apiEndpoint = 'http://localhost:8000/searchjob';
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'Manasi',
          email: 'manasi@gmail.com',
          stage: filterType === 'stage' ? filterValue : '',
          applied_date: filterType === 'applied_date' ? filterValue : '',
          location: filterType === 'location' ? filterValue : '',
          job_title: filterType === 'job_title' ? filterValue : '',
        }),
      });
      if (response.ok) {
        const jsonOutput = await response.json();
        console.log(jsonOutput);
        setJobDetail(jsonOutput);
        // Update job list with filtered results
      } else {
        console.error('Failed to fetch filtered jobs');
      }
    } catch (error) {
      console.error('Error fetching filtered jobs:', error);
    }
  };

  //Reset filter : 
  const resetFilter = async () => {
    setFilterType('none');
    setFilterValue('');
    await fetchData(); // Refetch all jobs
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'Manasi',
          email: 'manasi@gmail.com'
        }),
      });

      if (response.ok) {
        const jsonOutput = await response.json();
        setJobDetail(jsonOutput);
      } else {
        console.error(`HTTP error: ${response.status}: ${response.statusText}`);
        setJobDetail([]);
      }
    } catch (error) {
      console.error(error);
      setJobDetail([]);
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
          <div className="job-filter">
            <div className="filter-by">
              <label htmlFor="filter-by-select">Filter by</label>
              <select
                id="filter-by-select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                >
                <option value="none">--Select a Value--</option>
                <option value="stage">Status</option>
                <option value="applied_date">Date Applied</option>
                <option value="location">Location</option>
                <option value="job_title">Company</option>
              </select>
            </div>
            <div className="filter-input" style={{ width: "600px" }}>
              <input
                type="text"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                placeholder="search for"
              />
            </div>
            <button className="filter-btn" onClick={applyFilter}>
              Filter
            </button>
            <button className="reset-btn" onClick={resetFilter} >
              Reset Filter
            </button>
          </div>

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
  <Form.Select 
    name="appStatus"
    value={newJob.stage}
    onChange={(e) => setNewJob({ ...newJob, stage: e.target.value })}
    required
  >
    <option value="">Select status</option>  
    <option value="Applied">Applied</option>
    <option value="Interview">Interview</option>
    <option value="Assessment">Assessment</option>
    <option value="Reject">Reject</option>
  </Form.Select>
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

              <Form.Group className="mb-3">
                <Form.Label>Attachment</Form.Label>
                <Form.Control
                  type="file"
                  name="attachment"
                  // onChange={(e) => setNewJob({ ...newJob, attachment: e.target.files[0] })}
                  // required
                  accept=".pdf,.doc,.docx" // Specify the file types you want to accept
                  // isInvalid={!!newJob.attachmentError} // Add state logic for attachment error handling
                />
                {/* {newJob.attachmentError && (
                  <Form.Control.Feedback type="invalid">
                    {newJob.attachmentError}
                  </Form.Control.Feedback>
                )} */}
                <Form.Text className="text-muted">
                  Drop or browse files to upload (Max file size: 64.00 MB)
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;