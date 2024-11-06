import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles =  makeStyles((theme: Theme) => ({
  taskContainer: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '30px',
    height: 'calc(60vh - 60px)',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '10px',
      padding: '15px',
      height: 'auto',
    },
  },
  taskList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '10px 30px',
    width: '400px',
    border: '2px solid white',
    borderRadius: '8px',
    height: '100%',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '12px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '10px 15px',
    },
  },
  button: {	
	  color: 'white',
	  padding: '10px 20px',
    marginTop: '20px',
	  borderRadius: '5px',
	  fontSize: '16px',
	  fontWeight: 'bold',
	  cursor: 'pointer',
	  transition: 'all 0.3s ease',
	  '&:hover': {
		  backgroundColor: 'transparent',
		  color: 'white',
		  transform: 'scale(1.1)',
		  transition: 'all 0.3s ease',
	  },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      padding: '8px 16px',
      fontSize: '14px',
    },
  },
}));

export default useStyles;
