const mongoose = require('mongoose');
const JobCreationSchema = require('../models/jobCreationModel');


module.exports = async function jobCreateController(requestBody)
{
    const newJob = new JobCreationSchema(requestBody);

    const savedJob = await newJob.save();
    return savedJob;
}