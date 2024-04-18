import React from 'react';

const Sidebar = () => {
  const exportToCsv = async () => {
    try {
      const response = await fetch('http://localhost:8000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Specify content type as JSON
        },
        body: JSON.stringify({ // Convert object to JSON string
          username: 'Manasi',
          email: 'manasi@gmail.com'
        }),
      });

      if (response.ok) {
        const jobsData = await response.json();
        const csvRows = [];
        const headers = Object.keys(jobsData[0]);
        csvRows.push(headers.join(','));

        for (const row of jobsData) {
          const values = headers.map(header => {
            const escaped = ('' + row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
          });
          csvRows.push(values.join(','));
        }

        const csvData = csvRows.join('\n');
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'export_jobs.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error('Failed to fetch jobs');
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleExportKeyDown = (e) => {
    if (e.key === 'Enter') {
      exportToCsv();
    }
  };

  return (
    <nav className="sidebar">
      {/* Insert your links and icons here */}
      <div className="sidebar-item">Dashboard</div>
      <div className="sidebar-item">Messages</div>
      <div className="sidebar-item">My Applications</div>
      <div className="sidebar-item" onClick={exportToCsv} onKeyDown={handleExportKeyDown}>Export Jobs</div>
      <div className="sidebar-item">My Profile</div>
    </nav>
  );
};

export default Sidebar;
