const mongoose = require('mongoose');

const JobCreationSchema = require('../models/jobCreationModel');

module.exports = async function extractAllJobController(requestBody) {
    try {
        const { username, email } = requestBody;

        const allJobs = await JobCreationSchema.find({ username, email });

        // Return the array of job data
        return allJobs;
    } catch (error) {
        // Handle any errors that occur during the retrieval process
        // console.error("Error occurred while extracting all job data:", error);
        // throw new Error("An error occurred while extracting all job data.");
    }
}
