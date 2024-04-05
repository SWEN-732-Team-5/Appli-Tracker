const mongoose = require('mongoose');
const JobCreationSchema = require('../models/jobCreationModel');


module.exports = async function jobCreateController(requestBody)
{
    const newJob = new JobCreationSchema(requestBody);

    const savedJob = await newJob.save();
    return savedJob;
}

// module.exports = async function jobCreateController(requestBody)
// {
//     console.log("Request Body:", requestBody); // Log requestBody to verify it's correct
//     const newJob = new JobCreationSchema(requestBody);
//     console.log("New Job Instance:", newJob); // Log newJob instance to verify it's created correctly
//     const savedJob = await newJob.save();
//     console.log("Saved Job:", savedJob); // Log savedJob to verify it's created correctly
//     return savedJob;
// }