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
const userSignUpController = require('./controllers/userSignUpController');
const applydateCountController = require('./controllers/applydateCountController');
const roleCountController = require('./controllers/roleCountController');
const locationCountController = require('./controllers/locationCountController');


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

app.post('/searchjob', async (req, response) => {

   const searchedJobs = await jobSearchController(req.body);
   response.status(200).send(searchedJobs)
})

app.post('/assign_priority', async (req, response) => {

   const updatedJob = await assignPriorityController(req.body);

   const responseData = {
       status: "SUCCESS",
       status_code: 200,
       data: updatedJob
     };

   response.status(200).send(responseData)
})

app.post('/update_stage', async (req, response) => {

   const updatedJob = await updateStageController(req.body);

   const responseData = {
       status: "SUCCESS",
       status_code: 200,
       data: updatedJob
     };

   response.status(200).send(responseData)
})

app.post('/add_attachment', async (req, response) => {

   const updatedJob = await addAttachmentsController(req.body);

   const responseData = {
       status: "SUCCESS",
       status_code: 200,
       data: updatedJob
     };

   response.status(200).send(responseData)
  
})

app.post('/jobs', async (req, response) => {

   const updatedJob = await extractAllJobsController(req.body);
   response.status(200).send(updatedJob)
})

app.post('/add_todo', async (req, response) => {

   const updatedJob = await addTodoController(req.body);

   const responseData = {
       status: "SUCCESS",
       status_code: 200,
       data: updatedJob
     };

   response.status(200).send(responseData)
})

app.post('/monthly_todos', async (req, response) => {

   const getTodos = await monthlyCalendarController(req.body);
   response.status(200).send(getTodos)
})

app.post('/applied_date_count', async (req, response) => {

    const outputData = await applydateCountController(req.body);

    const dateCounts = {};
        
        outputData.forEach(data => {
            const date = data.x.substr(0, 10); 
            dateCounts[date] = (dateCounts[date] || 0) + data.y;
        });
        
        const allDates = Object.keys(dateCounts).sort((a, b) => a.localeCompare(b));
                
        const xValues = allDates;
        const yValues = xValues.map(date => dateCounts[date]);
        
        // Construct the final object in the specified format
        const finalOutput = {
            x: xValues,
            y: yValues
        };
      
    response.status(200).send(finalOutput)
 })

 app.post('/role_count', async (req, response) => {

    const outputData = await roleCountController(req.body);
    response.status(200).send(outputData)
 })

 app.post('/location_count', async (req, response) => {

    const outputData = await locationCountController(req.body);
    response.status(200).send(outputData)
 })

app.post('/signup', async (req, response) => {
   
    console.log("Data that will be created",req.body);
   const savedUser = await userSignUpController(req.body);

   const responseData = {
       status: "SUCCESS",
       status_code: 200,
       data: savedUser
     };

   response.status(200).send(responseData)
})

app.post('/login', async(req,response) => {
   console.log("User trying to login", req.body);
   const loggedUser = await userLoginController(req.body);
   const responseData = {
      status: "SUCCESS",
      status_code: 200,
      data: loggedUser 
   }

   response.status(200).send(responseData)
})