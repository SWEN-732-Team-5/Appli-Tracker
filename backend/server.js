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
//Controllers
const jobCreateController = require('./controllers/jobCreationController');
const jobSearchController = require('./controllers/jobSearchController');
const assignPriorityController = require('./controllers/assignPriorityController');
const updateStageController = require('./controllers/updateStageController');
const addAttachmentsController = require('./controllers/addAttachmentsController');
const extractAllJobsController = require('./controllers/extractAllJobsController');
const addTodoController = require('./controllers/addTodoController');
const monthlyCalendarController = require('./controllers/monthlyCalendarController');


mongoose.connect(connectionURL)
.then(()=>{
    app.listen(port, ()=> console.log(`Running on port: ${port}`))
})
.catch( (err) => {
    console.log(err);
})

app.post('/createjob', async (req, response) => {
   
     console.log("Data that will be created",req.body);
    const savedJob = await jobCreateController(req.body);

    const responseData = {
        status: "SUCCESS",
        status_code: 200,
        data: savedJob
      };

    response.status(200).send(responseData)
})

app.get('/searchjob', async (req, response) => {

    const searchedJobs = await jobSearchController(req.body);
   
    const responseData = {
        status: "SUCCESS",
        status_code: 200,
        data: searchedJobs
      };

    response.status(200).send(responseData)
})

app.post('/assign_priority', async (req, response) => {

    const updatedJob = await assignPriorityController(req.body);
    response.status(200).send(updatedJob)
})

app.post('/update_stage', async (req, response) => {

    const updatedJob = await updateStageController(req.body);
    response.status(200).send(updatedJob)
})

app.post('/add_attachment', async (req, response) => {

    const updatedJob = await addAttachmentsController(req.body);
    response.status(200).send(updatedJob)
})

app.post('/jobs', async (req, response) => {

    const updatedJob = await extractAllJobsController(req.body);
    response.status(200).send(updatedJob)
})

app.post('/add_todo', async (req, response) => {

    const updatedJob = await addTodoController(req.body);
    response.status(200).send(updatedJob)
})

app.get('/monthly_todos', async (req, response) => {

    const getTodos = await monthlyCalendarController(req.body);

    const responseData = {
        status: "SUCCESS",
        status_code: 200,
        data: getTodos
      };

    response.status(200).send(responseData)
})

