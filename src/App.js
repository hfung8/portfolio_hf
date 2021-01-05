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
import OnAndOffSwitch from './components/Switch';
import './index.css';
import 'antd/dist/antd.css';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline"
const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});


function App() {

  const [light, setLight] = React.useState(true);
  
  return (
    <div className="App">
       <ThemeProvider theme={light ? themeLight : themeDark}>
       <CssBaseline />
      <OnAndOffSwitch onClick={() => setLight(prev => !prev)}/>
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
      </ThemeProvider>
    </div>
    
  );
}

export default App;
