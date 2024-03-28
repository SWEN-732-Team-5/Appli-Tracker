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
        },
        applied_date : {
            type: String
        },
        location : {
            type: String
        },
        priority : {
            type: String
        },
        stage : {
            type: String,
            default: 'Applied'
        },
        weblink : {
            type: String
        }

    }
)

module.exports = mongoose.model('Job_Data_2',JobCreationSchema)