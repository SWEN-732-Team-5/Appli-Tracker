import React, { useState } from 'react';

const JobFilter = ({ setFilterType, setFilterValue }) => {
  const [filterBy, setFilterBy] = useState('title');
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const applyFilter = () => {
    setFilterType(filterBy);
    setFilterValue(filter);
  };

  const resetFilter = () => {
    setFilterType(null);
    setFilterValue('');
    setFilter('');
  };

  return (
    <div className="job-filter">
      <div className="filter-by">
        <label htmlFor="filter-by-select">Filter by</label>
        <select
          id="filter-by-select"
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        >
          <option value="company">Company</option>
          <option value="title">Title</option>
          <option value="dateApplied">Date Applied</option>
          <option value="emailFollowup">Email Followup</option>
          <option value="appStatus">Application Status</option>
        </select>
      </div>
      <div className="filter-input" style={{ width: "200px" }}>
        <input
          type="text"
          value={filter}
          placeholder="search for"
          onChange={handleFilterChange}
        />
      </div>
      <button className="filter-btn" onClick={applyFilter}>
        Filter
      </button>
      <button className="reset-btn" onClick={resetFilter}>
        Reset Filter
      </button>
    </div>
  );
};

export default JobFilter;