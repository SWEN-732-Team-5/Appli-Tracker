const express = require('express');
const mongoose = require('mongoose');

const Cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()

const port = process.env.PORT || 8000
const connectionURL = process.env.MONGO_URI

const app =express();

app.use(express.json())

app.use(Cors())

const jobCreateController = require('./controllers/jobCreationController');


mongoose.connect(connectionURL)
.then(()=>{
    app.listen(port, ()=> console.log(`Running on port: ${port}`))
})
.catch( (err) => {
    console.log(err);
})

app.post('/createjob', async (req, response) => {
   
     console.log("Data do came",req.body);
    const savedJob = await jobCreateController(req.body);
    // const newJob = new JobCreationSchema(req.body);

    // const savedJob = await newJob.save();
    response.status(200).send(savedJob)
   
})


