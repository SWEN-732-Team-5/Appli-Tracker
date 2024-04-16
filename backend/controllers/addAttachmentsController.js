const mongoose = require('mongoose');
const JobCreationSchema = require('../models/jobCreationModel');

module.exports = async function addAttachmentsController(requestBody) {
    try {

        const filter = { _id: requestBody.id }; 
        const update = { $push: { attachments: requestBody.attachment } };

        const updatedJob = await JobCreationSchema.findOneAndUpdate(
            filter,
            update,
            { new: true }
        );

        return updatedJob;
    } catch (error) {
        // Handle error
    }
}
