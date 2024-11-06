import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  menuItem: {
    fontSize: '1rem',
    padding: '8px 16px',
    color: 'white',
  },
  selectInput: {
    width: '100%',
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'lightgray',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiSelect-icon': {
      color: 'white',
    },
  },
}));

export default useStyles;
