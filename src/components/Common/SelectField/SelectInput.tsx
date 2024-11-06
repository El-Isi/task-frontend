// src/components/TaskStatusSelect.tsx
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
} from '@mui/material';
import { COMPLETED, PENDING } from '../../../constants/Status';
import { textToPascalCase } from '../../../utils/changeText';

import useStyles from './useStyles';

interface TaskStatusSelectProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  error: boolean;
}

const TaskStatusSelect = ({ label, value, onChange, error }: TaskStatusSelectProps) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth margin="dense" error={error} className={classes.selectInput}>
      <InputLabel>Status</InputLabel>
      <Select
        id="task-status-select"
        value={value}
        onChange={onChange}
        label={label}
        className={classes.selectInput}
      >
        <MenuItem value={PENDING} className={classes.menuItem}>{textToPascalCase(PENDING)}</MenuItem>
        <MenuItem value={COMPLETED} className={classes.menuItem}>{textToPascalCase(COMPLETED)}</MenuItem>
      </Select>
      {error && <FormHelperText>Status is required</FormHelperText>}
    </FormControl>
  );
};

export default TaskStatusSelect;
