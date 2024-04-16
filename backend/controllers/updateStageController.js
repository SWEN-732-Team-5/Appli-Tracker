const mongoose = require('mongoose');
const JobCreationSchema = require('../models/jobCreationModel');


module.exports = async function updateStageController(requestBody)
{
    try {
        const updatedJob = await JobCreationSchema.findOneAndUpdate(
            { _id: requestBody.id },
            { stage: requestBody.stage },
            { new: true } // Return the updated document
        );

        if (!updatedJob) {
            throw new Error('Job not found');
        }

        return updatedJob;
    } catch (error) {
        // Handle any errors
        // console.error("Error occurred during stage update:", error);
        // throw new Error("An error occurred during stage updation.");
    }

}