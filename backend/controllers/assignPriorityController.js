const mongoose = require('mongoose');
const JobCreationSchema = require('../models/jobCreationModel');


module.exports = async function assignPriorityController(requestBody)
{
    
    try {
        const updatedJob = await JobCreationSchema.findOneAndUpdate(
            { _id: requestBody.id.toString() },
            { priority: requestBody.priority.toString() },
            { new: true } // Return the updated document
        );

        if (!updatedJob) {
            throw new Error('Job not found');
        }

        return updatedJob;
    } catch (error) {
        // Handle any errors
        // console.error("Error occurred during priority assignment:", error);
        // throw new Error("An error occurred during priority assignment.");
    }

}