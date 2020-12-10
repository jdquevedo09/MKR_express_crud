const {Router} = require('express');
const tasks = Router();


const { home, getTasks, createTask, deleteTask, getTask, editTask,  isAuth } = require('../controllers/tasksControllers')

tasks.get('/', home);

tasks.get('/tasks',  isAuth, getTasks);

tasks.get('/tasks/:id', getTask);

tasks.put('/tasks/:id', editTask)

tasks.post('/tasks', createTask);

tasks.delete('/tasks/:id',deleteTask);

module.exports = tasks;