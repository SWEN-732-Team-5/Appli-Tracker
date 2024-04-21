import React, { useState } from 'react';

const JobFilter = () => {


  const [filterBy, setFilterBy] = useState('title');
  const [filter, setFilter] = useState('');
  const [jobs, setJobDetail] = useState([]);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const applyFilter = async () => {
    console.log("Hellll Inside it");
    console.log(filterBy);
    console.log(filter)
    try {
      const response = await fetch('http://localhost:8000/searchjobf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'Manasi',
          email: 'manasi@gmail.com',
          stage: "",
          applied_date: "",
          location: filterBy === 'location' ? filter : '' // Update location if filterBy is 'location'
        }),
      });
      console.log("Ohhh!!"+response);

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
    <div className="job-filter">
      <div className="filter-by">
        <label htmlFor="filter-by-select">Filter by</label>
        <select
          id="filter-by-select"
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        >
          <option value="none">--Select a Value--</option>
          <option value="company">Company</option>
          <option value="dateApplied">Date Applied</option>
          <option value="location">Location</option>
          <option value="appStatus">Application Status</option>
        </select>
      </div>
      <div className="filter-input" style={{ width: "600px" }}>
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
    </div>
  );
};

export default JobFilter;









// import React, { useState } from 'react';

// const JobFilter = ({ setFilterType, setFilterValue }) => {
//   const [filterBy, setFilterBy] = useState('title');
//   const [filter, setFilter] = useState('');

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const applyFilter = () => {
//     setFilterType(filterBy);
//     setFilterValue(filter);
//   };

//   const resetFilter = () => {
//     setFilterType(null);
//     setFilterValue('');
//     setFilter('');
//   };

//   return (
//     <div className="job-filter">
//       <div className="filter-by">
//         <label htmlFor="filter-by-select">Filter by</label>
//         <select
//           id="filter-by-select"
//           value={filterBy}
//           onChange={(e) => setFilterBy(e.target.value)}
//         >
//           <option value="none">--Select a Value--</option>
//           <option value="company">Company</option>
//           <option value="dateApplied">Date Applied</option>
//           <option value="location">Location</option>
//           <option value="appStatus">Application Status</option>
//         </select>
//       </div>
//       <div className="filter-input" style={{ width: "600px" }}>
//         <input
//           type="text"
//           value={filter}
//           placeholder="search for"
//           onChange={handleFilterChange}
//         />
//       </div>
//       <button className="filter-btn" onClick={applyFilter}>
//         Filter
//       </button>
//       <button className="reset-btn" onClick={resetFilter}>
//         Reset Filter
//       </button>
//     </div>
//   );
// };

// export default JobFilter;