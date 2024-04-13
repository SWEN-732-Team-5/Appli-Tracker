const mongoose = require('mongoose');
const JobCreationSchema = require('../models/jobCreationModel');

module.exports = async function addAttachmentsController(requestBody) {
    try {

        // Find the job by its _id and update the attachments array
        const updatedJob = await JobCreationSchema.findOneAndUpdate(
            { _id: requestBody.id }, // Search criteria
            { $push: { attachments: requestBody.attachment } }, // Append attachment to the attachments array
            { new: true } // Return the updated document
        );

        // // If no job is found with the given _id, throw an error
        // if (!updatedJob) {
        //     throw new Error('Job not found');
        // }

        // Return the updated job document
        return updatedJob;
    } catch (error) {
        // // Handle any errors that occur during the update process
        // console.error("Error occurred while adding attachment:", error);
        // throw new Error("An error occurred while adding attachment.");
    }
}
