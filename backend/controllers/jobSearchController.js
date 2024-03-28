const mongoose = require('mongoose');
const JobCreationSchema = require('../models/jobCreationModel');


module.exports = async function jobSearchController(requestBody)
{
    const searchResult = await JobCreationSchema.find(requestBody);
    return searchResult;

}