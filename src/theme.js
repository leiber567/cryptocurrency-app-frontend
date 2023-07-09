import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#005275',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#f89f33',
    },
  },
  typography: {
    fontFamily: '\'Rubik\', sans-serif',
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: {
            variant: 'filled'
          },
          style: {
            "& .MuiInputBase-root": {
              borderRadius: '15px',
              backgroundColor: 'white',
            },
          },
        }
      ],
    }
  }
});
