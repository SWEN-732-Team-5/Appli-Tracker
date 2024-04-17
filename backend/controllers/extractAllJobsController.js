const mongoose = require('mongoose');

const JobCreationSchema = require('../models/jobCreationModel');

module.exports = async function extractAllJobController(requestBody) {
    try {

        const stringifiedBody = {};
        for (const key in requestBody) {
            stringifiedBody[key] = String(requestBody[key]);
        }

        const { username, email } = stringifiedBody; // Destructure after conversion


        const allJobs = await JobCreationSchema.find({ username, email });

        // Return the array of job data
        return allJobs;
    } catch (error) {
        // Handle any errors that occur during the retrieval process
        // console.error("Error occurred while extracting all job data:", error);
        // throw new Error("An error occurred while extracting all job data.");
    }
}
