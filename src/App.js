import React from 'react';
import './App.css';
import Grid from './components/SingleGridList';
import Hello from './components/ProjectList';
import About from './components/About';
import Portfolio from './components/Portfolio';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './index.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hello/>
      </ThemeProvider>
      <br/>
      <About />
      <Portfolio />
      <Grid />
    </div>
  );
}

export default App;
