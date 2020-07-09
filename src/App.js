import React from 'react';
import './App.css';
import Grid from './components/SingleGridList';
import Hello from './components/Hello';
import MyBackground from './components/MyBackground';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Connect from './components/Connect';
import Logo from './components/Logo';
import './index.css';

// var ScrollParallax = ScrollAnim.Parallax;

function App() {
  return (
    <div className="App">
      <Hello/>
      <Logo />
      <MyBackground/>
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
