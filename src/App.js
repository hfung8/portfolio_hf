import React from 'react';
import './App.css';
import Grid from './components/SingleGridList';
import Hello from './components/ProjectList';
import About from './components/About';
import Portfolio from './components/Portfolio';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#000000'
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Hello className={classes.root}/>
      <Grid />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
