const mongoose = require('mongoose');
const TodoSchema = require('../models/todoSchema');


module.exports = async function addTodoController(requestBody)
{
    const newTodo = new TodoSchema(requestBody);

    const savedTodo = await newTodo.save();
    return savedTodo;
}