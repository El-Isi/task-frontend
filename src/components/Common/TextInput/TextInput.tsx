import React from 'react';
import { TextField } from '@mui/material';
import useStyles from './useStyles';

interface ITextTitleField {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

const TextInput = ({ label, value, onChange, error }: ITextTitleField) => {	
  const classes = useStyles();
  return (
    <TextField
      id="task-title-input"
      className={classes.textInput}
      autoComplete="off"
      autoFocus
      margin="dense"
      label={label}
      type="text"
      fullWidth
      value={value}
      onChange={onChange}
      error={error}
      helperText={error ? `${label} is required` : ''}
    />
  )
};

export default TextInput;
