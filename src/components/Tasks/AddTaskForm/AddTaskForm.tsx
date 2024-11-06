import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  SelectChangeEvent,
} from '@mui/material';

import TaskTitleField from '../../Common/TextInput/TextInput';
import TaskStatusSelect from '../../Common/SelectField/SelectInput';
import { PENDING } from '../../../constants/Status';

import useStyles from './useStyles';

interface AddTaskFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (title: string, status: string) => void;
}

const AddTaskForm = ({ open, onClose, onSubmit }: AddTaskFormProps) => {
  const classes = useStyles();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskStatus, setTaskStatus] = useState(PENDING);
  const [titleError, setTitleError] = useState(false);
  const [statusError, setStatusError] = useState(false);

  const handleSubmit = () => {
    if (!taskTitle) setTitleError(true);
    if (!taskStatus) setStatusError(true);

    if (taskTitle && taskStatus) {
      onSubmit(taskTitle, taskStatus);
      setTaskTitle('');
      setTaskStatus(PENDING);
      onClose();
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
    if (titleError && e.target.value) setTitleError(false);
  };

  const handleStatusChange = (e: SelectChangeEvent<string>) => {
    setTaskStatus(e.target.value as string);
    if (statusError && e.target.value) setStatusError(false);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div className={classes.dialog}>
      <DialogTitle className={classes.textStyle}>Add New Task</DialogTitle>
      <DialogContent>
        <TaskTitleField
          label='Task Title'
          value={taskTitle}
          onChange={handleTitleChange}
          error={titleError}
        />
        <TaskStatusSelect
          label='Status'
          value={taskStatus}
          onChange={handleStatusChange}
          error={statusError}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          className={classes.addButton}
        >
          Add
        </Button>
      </DialogActions>
      </div>
      
    </Dialog>
  );
};

AddTaskForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddTaskForm;
