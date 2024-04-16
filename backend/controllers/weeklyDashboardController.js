const mongoose = require('mongoose');
const JobCreationSchema = require('../models/jobCreationModel');


module.exports = async function weeklyDashboardController(requestBody)
{
    try
    {
    const startDate = new Date(requestBody.startDate);
    const endDate = new Date(requestBody.endDate);
  
    // Ensure endDate is at least a week after startDate (optional)
  
    const jobs = await JobCreationSchema.find({
      applied_date: { $gte: startDate, $lt: endDate }
    });
    return jobs;
  
    } 
    catch (error) 
    {
    }

}