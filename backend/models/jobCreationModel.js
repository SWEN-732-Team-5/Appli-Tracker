const mongoose = require('mongoose');

const JobCreationSchema = mongoose.Schema(
    {
        username:{
            type:String
        },
        email:{
            type: String
        },
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
        payment_type: {
            type: String,
            required: false
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
        },
        attachments: {
            type: [String],
            required: false
        },
        details: {
            type: String,
            required: false
        }

    }
)

module.exports = mongoose.model('Job_Data_6',JobCreationSchema)