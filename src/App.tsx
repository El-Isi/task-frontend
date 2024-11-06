import React from 'react';
import './App.css';
import TaskContainer from './containers/Tasks/TasksContainer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">      
          <TaskContainer />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
