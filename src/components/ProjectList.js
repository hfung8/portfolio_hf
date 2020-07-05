import React from "react";
import Grid from '@material-ui/core/Grid';
import headshot from '../images/headshot/harrycircle.png'; 
import { Divider } from "@material-ui/core";

const styleDescription = {
    fontSize: 25,
    fontFamily: 'Raleway',
    color: '#000000'
}
const styleObj = {
    fontFamily: 'Monoton',
    fontSize: 44,
    backgroundColor:'#ffb74d',
    color: '#a9a9a9'
}
const image = {
    backgroundColor: '#9e9e9e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}


function About(){

    return (
        <div> 
                <Grid>
                        <div style={styleObj}>Hi, I'm Harrison. I am a Front End Developer, and I love to build beautiful, functional websites.</div>
                        <Grid container style={image}>
                        <img src={headshot} alt='harrison headshot' /><br/>
                        </Grid>
                        <Divider variant="middle" />
                        <Grid container justify="center"><Grid item xs={6}><span style={styleDescription}>Creative | Empathetic | Hard-Working<br/><Divider variant="middle"/> I have a passion for coding and helping others to attain their coding goals. I'm a teaching assistant and tutor at both Rutgers and Columbia University coding boot camps.</span></Grid></Grid>
                 </Grid>
        </div>
    )
}

export default About;
