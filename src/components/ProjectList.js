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
        color: 'rgba(0, 0, 0, 0.26)'
    }
}));

const styleDescription = {
    fontSize: 20,
    color: '#000000'
}
const styleObj = {
    fontFamily: 'Monoton'
}
const styleObject = {
    fontFamily: 'Helvetica',
    fontSize: 25,
    color: '#000000'
}

function About(){

    const classes = useStyles();

    return (
        <div>
            <Grid container justify = "center" className={classes.root}>
                <img src={headshot} alt='harrison headshot' /> </Grid>
                    <Grid className={classes.background}>
                        <h1 style={styleObj}><span>Hi, I'm Harrison. <br/> I am a Front End Developer, and I love to build beautiful, functional websites.</span></h1><Divider variant="middle"/><br/>
                        <Grid container justify= "center">
                            <Grid container item xs={4}><span style={styleObject}>Creative | Empathetic | Hard-Working</span><br/><Divider variant="middle"/><span style={styleDescription}>I have a passion for coding and helping others to attain their coding goals. I'm a teaching assistant and tutor at both Rutgers and Columbia University coding boot camps.</span></Grid></Grid>
                    </Grid>
        </div>
    )
}

export default About;
