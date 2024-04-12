const mongoose = require('mongoose');
const TodoSchema = require('../models/todoSchema');


module.exports = async function addTodoController(requestBody)
{
    const newTodo = new TodoSchema(requestBody);

    const savedTodo = await newTodo.save();
    return savedTodo;
}

// module.exports = async function jobCreateController(requestBody)
// {
//     console.log("Request Body:", requestBody); // Log requestBody to verify it's correct
//     const newJob = new JobCreationSchema(requestBody);
//     console.log("New Job Instance:", newJob); // Log newJob instance to verify it's created correctly
//     const savedJob = await newJob.save();
//     console.log("Saved Job:", savedJob); // Log savedJob to verify it's created correctly
//     return savedJob;
// }