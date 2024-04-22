const mongoose = require('mongoose');
const userCreationSchema = require('../models/user');

module.exports = async function userCreateSchema(requestBody)
{
    console.log(requestBody);
    const newUser = new userCreationSchema(requestBody);

    const savedUser = await newUser.save();
    return savedUser;
}