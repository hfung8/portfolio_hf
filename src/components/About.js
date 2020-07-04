import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
    },
    about: {
        fontSize: 20
    }
}));

const styleObj = {
    fontFamily: 'Monoton',
    color: '#a9a9a9',
    fontSize: 44
}

const styleAbout = {
    fontFamily: 'Raleway',
    fontSize: 25
}

function About(){

    const classes = useStyles();

    return(
        <div>
            <Grid container justify="center">
            <Grid item xs={6} className={classes.about}>
                <h1 style={styleObj}>About Me</h1>
                    <span style={styleAbout}>
                    I live in New York City and am originally from Toronto. I love to play soccer and am currently a player for the Broadway FC - part of Metro Soccer League of NY. My favorite team is Chelsea and my favorite player is Ricardo Kaka. I also enjoy playing basketball and play pick-up at 92Y pretty regularly. I love playing the guitar and singing -- a hobby of mine for the past 10 years, which started with my love of the Beatles. I learned piano at the Royal Conservatory of Music in Toronto.
                    </span>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;