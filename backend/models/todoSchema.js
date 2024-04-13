const mongoose = require('mongoose');

const TodoScheduleSchema = mongoose.Schema(
    {
        username:{
            type:String
        },
        email:{
            type: String
        },
        title:{
            type: String
        },
        deadline:{
            type: String
        },
        description:{
            type: String
        }
    }
)

module.exports = mongoose.model('TodoSchedules',TodoScheduleSchema)