import React , { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Home() {

  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
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


        if (response.ok) 
        {
            const jsonOutput = await response.json();
            console.log("hii"+jsonOutput);
            setJobs(jsonOutput);
        } 
        else
        {
            console.error(`HTTP error: ${response.status}: ${response.statusText}`);
            setJobs("");
        }
    } catch (error) {
        console.error(error);
        setJobs("");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Dashboard jobs={jobs} setJobDetail={setJobs} />;
}
export default Home;