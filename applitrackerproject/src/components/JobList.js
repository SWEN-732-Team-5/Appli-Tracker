import React from 'react';
import JobCard from './JobCard';
import './JobList.css';
import PropTypes from 'prop-types'; // Import PropTypes

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};
// PropTypes validation
JobList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired, 
    })
  ).isRequired,
};
export default JobList;
