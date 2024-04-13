const mongoose = require('mongoose');

const TodoSchema = require('../models/todoSchema');

module.exports = async function monthlyCalendarController(requestBody) {
    try {
        const { username, email, monthyear } = requestBody;
        const [month, year] = monthyear.split('/');

        // Query the database to find all todos that match the given month and year
        const todos = await TodoSchema.aggregate([
            {
                $match: {
                    username,
                    email,
                    $expr: {
                        $and: [
                            { $eq: [{ $month: { $dateFromString: { dateString: "$deadline", format: "%m/%d/%Y" } } }, parseInt(month)] },
                            { $eq: [{ $year: { $dateFromString: { dateString: "$deadline", format: "%m/%d/%Y" } } }, parseInt(year)] }
                        ]
                    }
                }
            }
        ]);

        return todos;
    } catch (error) {
        // console.error("Error occurred while fetching todos by month and year:", error);
        // throw new Error("An error occurred while fetching todos by month and year.");
    }
}