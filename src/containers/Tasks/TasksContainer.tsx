import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import TasksList from '../../components/Tasks/TasksList/TasksList';
import AddTaskForm from '../../components/Tasks/AddTaskForm/AddTaskForm';

import { ITask } from '../../models/ITask';
import { DEFAULT_TASKS } from '../../constants/Tasks';

import * as TasksServices from '../../services/TasksService';

import useStyles from './useStyles';

const TaskContainer = () => {
  const classes = useStyles();
  
  const [tasks, setTasks] = useState<ITask[]>(DEFAULT_TASKS);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchTasks = async () => {
    const response = await TasksServices.getTasks();
    setTasks(response);
  };

  const clearTaks = async () => {
    const response = await TasksServices.deleteTasks();
    setTasks(response);
  };

  const handleAddTask = async (taskTitle: string, taskStatus: string) => {
    const newTask = { title: taskTitle, status: taskStatus };
    const response = await TasksServices.addTask(newTask);
    setTasks(prevTasks => [...prevTasks, response]);
  };

  useEffect(() => {
    fetchTasks();
  }, []); 

  return (
    <>
      <Typography variant="h2" component="div"> Board </Typography>
      <div className={classes.taskContainer}>
        <div className={classes.taskList}>
          <Typography variant="h3" component="div"> Taks Created </Typography>
          {
            tasks.length > 0 ? (
              <TasksList tasks={tasks} />
            ) : (
              <Typography variant="h4" component="div"> No tasks created </Typography>
            )
          }
        </div>
      </div>
      <Button onClick={() => setModalOpen(true)} className={classes.button}> Add Task </Button>
      <Button onClick={clearTaks} className={classes.button}> Clear Tasks </Button>
      <AddTaskForm open={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddTask} />
    </>
  );
};

export default TaskContainer;
