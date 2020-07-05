import React from 'react';
import './App.css';
import Grid from './components/SingleGridList';
import Hello from './components/ProjectList';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Connect from './components/Connect';
import './index.css';

function App() {
  return (
    <div className="App">
      <Hello/>
      <br/>
      <About />
      <Portfolio/>
      <br/>
      <br/>
      <Grid />
      <br/>
      <br/>
      <Connect />
    </div>
  );
}

export default App;
