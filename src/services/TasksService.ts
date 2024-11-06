import axios from 'axios';
import { config } from './config';
import { DEFAULT_TASKS } from '../constants/Tasks';

const URL = config().baseURL;

export const getTasks = async () => {
  try {
    const response = await axios.get(`${URL}/tasks`);
    return response.data;
  } catch (error) {
    // here we can start a recuperation process for get all tasks.
    return DEFAULT_TASKS;
  }
};

export const addTask = async (task: any) => {
  try {
    const response = await axios.post(`${URL}/tasks`, task);
    return response.data;
  } catch (error) {
    // here we can start a recuperation process and save the task in the localstorage.
    return task;
  }
};

export const deleteTasks = async () => {
  try {
    const response = await axios.delete(`${URL}/tasks`);
    return response.data;
  } catch (error) {
    // here we can start a recuperation process for delete all tasks.
    return DEFAULT_TASKS;
  }
};
