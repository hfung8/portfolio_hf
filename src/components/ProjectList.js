import React from "react";
import Grid from '@material-ui/core/Grid';
import headshot from '../images/headshot/harrycircle.png'; 
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justify: 'center',
        background: '#ffffff',
        fontSize: 24
    },
    background:{
        color: '#a9a9a9'
    }
}));

const styleDescription = {
    fontSize: 25,
    fontFamily: 'Raleway',
    color: '#a9a9a9'
}
const styleObj = {
    fontFamily: 'Monoton',
    fontSize: 44
}
const styleObject = {
    fontFamily: 'Raleway',
    fontSize: 25,
    color: '#a9a9a9'
}

function About(){

    const classes = useStyles();

    return (
        <div> 
                <Grid className={classes.background}>
                        <h1 style={styleObj}><span>Hi, I'm Harrison. I am a Front End Developer, and I love <br/> to build beautiful, functional websites.</span></h1><Divider variant="middle"/><br/>
                        <span style={styleObject}>Creative | Empathetic | Hard-Working</span><br/>
                        <img src={headshot} alt='harrison headshot' /><br/>
                        <Divider variant="middle" />
                        <Grid container justify="center"><span style={styleDescription}>I have a passion for coding and helping others to attain their coding goals. I'm a teaching assistant and tutor at both Rutgers and Columbia University coding boot camps.</span></Grid>
                 </Grid>
        </div>
    )
}

export default About;
