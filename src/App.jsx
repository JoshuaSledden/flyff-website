import React from 'react';
import { ThemeProvider } from 'styled-components';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

const theme = useSelector(state => state.theme);

function App() {
  const appContent = (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );

  return <ThemeProvider theme={theme}>{appContent}</ThemeProvider>;
}

export default App;
