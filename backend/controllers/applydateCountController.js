const mongoose = require('mongoose');
const JobCreationSchema = require('../models/jobCreationModel');

module.exports = async function applydateCountController(requestBody) {
    try {
        const stringifiedBody = {};
        for (const key in requestBody) {
            stringifiedBody[key] = String(requestBody[key]);
        }

        const { username, email } = stringifiedBody;

        const pipeline = [
            {
                $match: { username, email }
            },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: { $toDate: "$applied_date" } } },
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    x: "$_id",
                    y: "$count"
                }
            },
            {
                $sort: { x: 1 }
            }
        ];

        const outputData = await JobCreationSchema.aggregate(pipeline);

        const dateCounts = {};
        
        outputData.forEach(data => {
            const date = data.x.substr(0, 10); 
            dateCounts[date] = (dateCounts[date] || 0) + data.y;
        });
        
        const allDates = Object.keys(dateCounts).sort();
        
        const xValues = allDates;
        const yValues = xValues.map(date => dateCounts[date]);
        
        // Construct the final object in the specified format
        const finalOutput = {
            x: xValues,
            y: yValues
        };
        
        console.log(finalOutput);
        


        // Return the array of job data
        return finalOutput;
    } catch (error) {
        // Handle any errors that occur during the retrieval process
        // console.error("Error occurred while extracting all job data:", error);
        // throw new Error("An error occurred while extracting all job data.");
    }
}
