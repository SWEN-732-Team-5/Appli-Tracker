const mongoose = require('mongoose')
const validator =  require('validator')

const userCreationSchema = new mongoose.Schema({
    name: {
        type: String,
        required :  true,
        trim : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is Invalid')
            }
        }
    }, 
    userSecKey : {
        type: String,
        required: true,
        minLength : 7,
        trim : true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error("Password cannot be password!")
            }
        }
    }
}) 

module.exports = mongoose.model('userSchema', userCreationSchema)