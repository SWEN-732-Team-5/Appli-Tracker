const mongoose = require('mongoose');
const userCreationSchema = require('../models/user');

module.exports = async function userCreationSchema(requestBody)
{
    const newUser = new userCreationSchema(requestBody);

    const savedUser = await newUser.save();
    return savedUser;
}