const mongoose = require('mongoose');
const JobCreationSchema = require('../models/jobCreationModel');


module.exports = async function jobSearchController(requestBody)
{
    try
    {
        const stringifiedBody = {};

        for (const key in requestBody) 
        {
          stringifiedBody[key] = String(requestBody[key]);
        }

        const searchResult = await JobCreationSchema.find(stringifiedBody);
        return searchResult;
    }
    catch(error)
    {
        
    }

}