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

        // Return the updated job document
        return updatedJob;
    } catch (error) {
    }
}
