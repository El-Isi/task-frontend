import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import ListItem from '@mui/material/ListItem';

import Typography from '@mui/material/Typography';

import { ITask } from '../../../models/ITask';

import useStyles from './useStyles';
import { textToPascalCase } from '../../../utils/changeText';

const TaskItem = ({ task }: { task: ITask }) => {
  const classes = useStyles();
  return (
    <ListItem key={task.id}>
      <Card sx={{ minWidth: 300 }}>
        <CardContent className={classes.taskItem}>
          <Typography variant="h4" component="div" className={classes.textStyle}>
            {task.title}
          </Typography>
          <Typography className={classes.textStyle}>Status: {textToPascalCase(task.status)}</Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
};

TaskItem.propTypes = {};

export default TaskItem;
