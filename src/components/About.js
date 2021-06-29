import React from 'react';
import Grid from '@material-ui/core/Grid';

const styleObj = {
    fontFamily: 'Monoton',
    color: '#40E0D0',
    fontSize: 44,
    backgroundColor: '#FFD700'
}

const styleAbout = {
    fontFamily: 'Raleway',
    fontSize: 25
}

function About(){

    return(
        <div>
            <div style={styleObj}>About Me</div>
            <Grid container justify="center">
                <Grid item xs={6} container>
                    <span style={styleAbout}>
                    I live in New York City and am originally from Toronto. I love to play soccer and am currently a player for the Broadway FC - part of Metro Soccer League of NY. My favorite team is Chelsea and my favorite player is Ricardo Kaka. I also enjoy playing basketball and play pick-up at 92Y pretty regularly. I love playing the guitar and singing -- a hobby of mine for the past 10 years, which started with my love of the Beatles. I learned piano at the Royal Conservatory of Music in Toronto.
                    </span>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;
