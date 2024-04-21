import React , { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Home() {

  const [jobs, setJobDetail] = useState([]);

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
            setJobDetail(jsonOutput);
        } 
        else
        {
            console.error(`HTTP error: ${response.status}: ${response.statusText}`);
            setJobDetail("");
        }
    } catch (error) {
        console.error(error);
        setJobDetail("");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Dashboard jobs={jobs} setJobDetail={setJobDetail} />;
}
export default Home;