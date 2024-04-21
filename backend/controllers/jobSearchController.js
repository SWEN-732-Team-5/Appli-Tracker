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

        const updatedBody = {};

        for(const key in stringifiedBody)
        {
          if(stringifiedBody[key].length > 0)
          {
            updatedBody[key] =  stringifiedBody[key];
          }
        }
        console.log(updatedBody)
        const searchResult = await JobCreationSchema.find(updatedBody);
        return searchResult;
    }
    catch(error)
    {
        
    }

}