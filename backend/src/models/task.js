const mongoose = require('mongoose')
const validator =  require('validator')

const userSchema = new mongoose.Schema({ 
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
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        reqiured : true,
        ref : 'User' //To create Relationship between user model and task mode
    }
} , {
    timestamps: true
})
const Task = mongoose.model('Tasks', userSchema)

module.exports = Task