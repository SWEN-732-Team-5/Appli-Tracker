import React , { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// function Home() {

//   return (
//         <h1>Homepage</h1>
//   );
// }

// export default Home;



function Home() {
  // const jobs = [
  //   // This is placeholder data; you would replace this with actual data fetched from an API.
  //   { id: 1, title: 'UI/UX Designer', company: 'Netflix', salary: '$12K-$14K / Month', type: 'Fulltime', description:'At Netflix, our mission is to Entertain the World. We are constantly innovating on how entertainment is imagined, created and delivered to a global audience. We currently stream content in more than 30 languages in 190 countries, topping over 233 million paid subscribers. '},
  //   { id: 2, title: 'UX Designer', company: 'Triple Whale', salary: '$8K-$11K / Month', type: 'Fulltime', description:'At Netflix, our mission is to Entertain the World. We are constantly innovating on how entertainment is imagined, created and delivered to a global audience. We currently stream content in more than 30 languages in 190 countries, topping over 233 million paid subscribers. '},
  //   { id: 3, title: 'Product Designer', company: 'Motto', salary: '$12K-$14K / Month', type: 'Part-time', description:'At Netflix, our mission is to Entertain the World. We are constantly innovating on how entertainment is imagined, created and delivered to a global audience. We currently stream content in more than 30 languages in 190 countries, topping over 233 million paid subscribers. '},
  //   { id: 4, title: 'UI/UX Designer', company: 'Brooksource', salary: '$12K-$14K / Month', type: 'Fulltime', description:'At Netflix, our mission is to Entertain the World. We are constantly innovating on how entertainment is imagined, created and delivered to a global audience. We currently stream content in more than 30 languages in 190 countries, topping over 233 million paid subscribers. '},
  //   { id: 5, title: 'UI Designer', company: 'SideQuestVR', salary: '$12K-$14K / Month', type: 'Fulltime' , description:'At Netflix, our mission is to Entertain the World. We are constantly innovating on how entertainment is imagined, created and delivered to a global audience. We currently stream content in more than 30 languages in 190 countries, topping over 233 million paid subscribers. '},
  //   // ... more job listings
  // ];

  const [jobs, setJobDetail] = useState([]);

  const fetchData = async () => {
    try {
        // const response = await fetch('http://localhost:8000/jobs');
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

  return <Dashboard jobs={jobs} />;
}
export default Home;