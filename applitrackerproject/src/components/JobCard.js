import React from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.salary}</p>
      <p>{job.type}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobCard;
