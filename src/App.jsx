import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import Routes from './routes';
import NavigationBar from './components/navigation-bar';

const App = () => {
  const { theme } = useSelector(state => state.themeReducer);
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
