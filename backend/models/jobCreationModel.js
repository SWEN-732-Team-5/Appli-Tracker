const mongoose = require('mongoose');

const JobCreationSchema = mongoose.Schema(
    {
        job_title:{
            type: String,
            required: true
        },
        description:{
            type: String
        },
        type:{
            type: String,
            required: true
        },
        payment: {
            type: Number,
            required: true
        }
    }
)

module.exports = mongoose.model('Job_Data',JobCreationSchema)