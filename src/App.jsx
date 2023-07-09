import './App.scss';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { store } from './store';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme.js';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
