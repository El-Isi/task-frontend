import React from 'react';
import TaskItem from '../TaskItem/TasksItem';
import List from '@mui/material/List';

const TastList = ({ tasks }: { tasks: any }) => {
  return (
    <div>
      <List>
        {tasks.map((task: any) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    </div>
  );
};

TastList.propTypes = {};

export default TastList;
