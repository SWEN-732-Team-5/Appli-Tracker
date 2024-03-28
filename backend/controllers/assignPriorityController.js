const mongoose = require('mongoose');
const JobCreationSchema = require('../models/jobCreationModel');


module.exports = async function assignPriorityController(requestBody)
{
    // const searchResult = await JobCreationSchema.find(requestBody);
    // return searchResult;
    try {
        const updatedJob = await JobCreationSchema.findOneAndUpdate(
            { _id: requestBody.id },
            { priority: requestBody.priority },
            { new: true } // Return the updated document
        );

        if (!updatedJob) {
            throw new Error('Job not found');
        }

        return updatedJob;
    } catch (error) {
        // Handle any errors
        console.error("Error occurred during priority assignment:", error);
        throw new Error("An error occurred during priority assignment.");
    }

}